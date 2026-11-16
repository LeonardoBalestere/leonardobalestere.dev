import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FunnelStore } from '../data/funnel-store';
import { DiscardReason, Job, STAGES, Stage } from '../funnel.models';
import { injectFunnelText } from '../funnel.i18n';
import { JobCard } from './job-card';
import { JobDrawer } from './job-drawer';
import { DiscardDialog } from './discard-dialog';

type SortKey = 'fit' | 'date';

const STAGE_COLORS: Record<Stage, string> = {
  new: 'var(--text-faint)',
  toApply: 'var(--blue)',
  applied: 'var(--purple-light)',
  interview: 'var(--amber)',
  offer: 'var(--green)',
  discarded: 'var(--red)',
};

@Component({
  selector: 'app-kanban',
  imports: [JobCard, JobDrawer, DiscardDialog],
  templateUrl: './kanban.html',
  styleUrl: './kanban.scss',
})
export class Kanban implements OnDestroy {
  protected readonly store = inject(FunnelStore);
  protected readonly t = injectFunnelText();
  protected readonly colors = STAGE_COLORS;
  protected readonly fitOptions = [0, 70, 80];

  protected readonly query = signal('');
  protected readonly channel = signal('');
  protected readonly minFit = signal(0);
  protected readonly sort = signal<SortKey>('fit');

  protected readonly overStage = signal<Stage | null>(null);
  protected readonly selectedId = signal<number | null>(null);
  protected readonly pendingDiscard = signal<Job | null>(null);
  protected readonly toast = signal('');
  private draggedId: number | null = null;
  private toastTimer?: ReturnType<typeof setTimeout>;

  protected readonly channels = computed(() =>
    [...new Set(this.store.jobs().map((job) => job.channel))].sort(),
  );

  protected readonly filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    const channel = this.channel();
    const minFit = this.minFit();
    return this.store
      .jobs()
      .filter(
        (job) =>
          job.fit >= minFit &&
          (!channel || job.channel === channel) &&
          (!query ||
            [job.title, job.company, ...job.requiredTerms, ...job.niceToHaveTerms].some((text) =>
              text.toLowerCase().includes(query),
            )),
      );
  });

  protected readonly columns = computed(() => {
    const jobs = this.filtered();
    const byDate = (job: Job) => job.history[job.history.length - 1].at;
    const compare =
      this.sort() === 'fit'
        ? (a: Job, b: Job) => b.fit - a.fit
        : (a: Job, b: Job) => byDate(b).localeCompare(byDate(a));
    return STAGES.map((stage) => ({
      stage,
      jobs: jobs.filter((job) => job.stage === stage).sort(compare),
    }));
  });

  protected readonly selected = computed(
    () => this.store.jobs().find((job) => job.id === this.selectedId()) ?? null,
  );

  ngOnDestroy(): void {
    this.store.highlightLate.set(false);
    clearTimeout(this.toastTimer);
  }

  protected onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected onChannel(event: Event): void {
    this.channel.set((event.target as HTMLSelectElement).value);
  }

  protected onMinFit(event: Event): void {
    this.minFit.set(Number((event.target as HTMLSelectElement).value));
  }

  protected onSort(event: Event): void {
    this.sort.set((event.target as HTMLSelectElement).value as SortKey);
  }

  protected onDragStart(event: DragEvent, job: Job): void {
    this.draggedId = job.id;
    event.dataTransfer?.setData('text/plain', String(job.id));
    if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
  }

  protected onDragEnd(): void {
    this.draggedId = null;
    this.overStage.set(null);
  }

  protected onDragOver(event: DragEvent, stage: Stage): void {
    if (this.draggedId === null) return;
    event.preventDefault();
    this.overStage.set(stage);
  }

  protected onDrop(event: DragEvent, stage: Stage): void {
    event.preventDefault();
    this.overStage.set(null);
    const job = this.store.jobs().find((j) => j.id === this.draggedId);
    this.draggedId = null;
    if (job) this.requestMove(job, stage);
  }

  /** Descartar abre o diálogo de motivo; as demais etapas mudam direto. */
  protected requestMove(job: Job, stage: Stage): void {
    if (job.stage === stage) return;
    if (stage === 'discarded') {
      this.pendingDiscard.set(job);
      return;
    }
    void this.move(job, stage);
  }

  protected confirmDiscard(reason: DiscardReason): void {
    const job = this.pendingDiscard();
    this.pendingDiscard.set(null);
    if (job) void this.move(job, 'discarded', reason);
  }

  protected saveNotes(job: Job, notes: string): void {
    void this.store.saveNotes(job.id, notes).then(() => this.showToast(this.t().job.notesSaved));
  }

  private async move(job: Job, stage: Stage, reason?: DiscardReason): Promise<void> {
    const from = this.t().stages[job.stage];
    await this.store.move(job.id, stage, reason);
    this.showToast(this.t().kanban.moved(job.company, from, this.t().stages[stage]));
  }

  private showToast(message: string): void {
    this.toast.set(message);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toast.set(''), 2400);
  }
}
