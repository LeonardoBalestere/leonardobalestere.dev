import { Injectable, computed, inject, signal } from '@angular/core';
import { DashboardSummary, DiscardReason, Job, Stage } from '../funnel.models';
import { FUNNEL_API } from './funnel-api';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Dias de calendário desde a última mudança de status (ontem = 1). */
export function daysInStage(job: Job, now = Date.now()): number {
  const last = new Date(job.history[job.history.length - 1].at);
  const today = new Date(now);
  const startOf = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.max(0, Math.round((+startOf(today) - +startOf(last)) / DAY_MS));
}

@Injectable({ providedIn: 'root' })
export class FunnelStore {
  private readonly api = inject(FUNNEL_API);
  private loading?: Promise<void>;

  readonly jobs = signal<Job[]>([]);
  readonly summary = signal<DashboardSummary | null>(null);
  /** Destaca no kanban as vagas aplicadas sem retorno. */
  readonly highlightLate = signal(false);

  readonly returnDays = computed(() => this.summary()?.reminders.returnDays ?? 7);

  readonly lateJobs = computed(() =>
    this.jobs().filter((job) => job.stage === 'applied' && daysInStage(job) > this.returnDays()),
  );

  readonly newJobsCount = computed(() => this.jobs().filter((job) => job.stage === 'new').length);

  load(): Promise<void> {
    this.loading ??= Promise.all([this.api.getJobs(), this.api.getSummary()]).then(
      ([jobs, summary]) => {
        this.jobs.set(jobs);
        this.summary.set(summary);
      },
    );
    return this.loading;
  }

  isLate(job: Job): boolean {
    return job.stage === 'applied' && daysInStage(job) > this.returnDays();
  }

  /** Muda o status. Descartar exige motivo. */
  async move(id: number, stage: Stage, reason?: DiscardReason): Promise<void> {
    if (stage === 'discarded' && !reason) {
      throw new Error('Descartar uma vaga exige motivo.');
    }
    const at = new Date().toISOString();
    this.jobs.update((jobs) =>
      jobs.map((job) =>
        job.id !== id || job.stage === stage
          ? job
          : {
              ...job,
              stage,
              history: [...job.history, { stage, at }],
              discardReason: stage === 'discarded' ? reason : undefined,
              nextInterview: stage === 'interview' ? job.nextInterview : undefined,
            },
      ),
    );
    await this.api.moveJob(id, stage, reason);
  }

  async saveNotes(id: number, notes: string): Promise<void> {
    this.jobs.update((jobs) => jobs.map((job) => (job.id === id ? { ...job, notes } : job)));
    await this.api.saveNotes(id, notes);
  }
}
