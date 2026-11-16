import {
  Component,
  ElementRef,
  afterNextRender,
  computed,
  input,
  output,
  viewChild,
} from '@angular/core';
import { Job, STAGES, Stage } from '../funnel.models';
import { injectFunnelText } from '../funnel.i18n';
import { fitLevel } from './job-card';

/** Painel lateral com detalhes, histórico e notas da vaga. */
@Component({
  selector: 'app-job-drawer',
  template: `
    <dialog #dialog (close)="closed.emit()" aria-labelledby="job-title">
      <div class="head">
        <span class="mono-kicker">{{ t().job.id(job().id) }}</span>
        <button
          type="button"
          class="close"
          (click)="dialog.close()"
          [attr.aria-label]="t().job.close"
        >
          ✕
        </button>
      </div>

      <div>
        <h2 id="job-title">{{ job().title }}</h2>
        <p class="sub">{{ job().company }} · {{ job().location }}</p>
      </div>

      <div class="controls">
        <span class="fit" [class]="fitClass()">fit {{ job().fit }}</span>
        <select
          class="field"
          [attr.aria-label]="t().job.status"
          [value]="job().stage"
          (change)="onStageChange($event)"
        >
          @for (stage of stages; track stage) {
            <option [value]="stage" [selected]="stage === job().stage">
              {{ t().stages[stage] }}
            </option>
          }
        </select>
        <a class="btn btn-ghost btn-sm" [href]="job().url" target="_blank" rel="noopener">
          {{ t().job.openPosting }}
        </a>
      </div>

      <div class="reason">
        <span class="mono-kicker">{{ t().job.fitReason }}</span>
        <p>{{ job().fitReason }}</p>
      </div>

      <dl>
        <dt>{{ t().job.channel }}</dt>
        <dd>{{ job().channel }}</dd>
        <dt>{{ t().job.origin }}</dt>
        <dd>{{ t().origins[job().origin] }}</dd>
        <dt>{{ t().job.required }}</dt>
        <dd>{{ job().requiredTerms.join(', ') || '—' }}</dd>
        <dt>{{ t().job.niceToHave }}</dt>
        <dd>{{ job().niceToHaveTerms.join(', ') || '—' }}</dd>
      </dl>

      <div>
        <span class="mono-kicker">{{ t().job.history }}</span>
        <ol class="timeline">
          @for (step of history(); track step.at) {
            <li [class.discarded]="step.stage === 'discarded'">
              {{ t().stages[step.stage] }}
              @if (step.stage === 'discarded' && job().discardReason; as reason) {
                · {{ t().reasons[reason] }}
              }
              <small>{{ step.date }}</small>
            </li>
          }
        </ol>
      </div>

      <label class="notes">
        <span class="mono-kicker">{{ t().job.notes }}</span>
        <textarea
          class="field"
          [placeholder]="t().job.notesPlaceholder"
          [value]="job().notes"
          (blur)="onNotesBlur($event)"
        ></textarea>
      </label>
    </dialog>
  `,
  styles: `
    dialog {
      position: fixed;
      inset: 0 0 0 auto;
      width: min(440px, 100vw);
      max-width: none;
      height: 100dvh;
      max-height: none;
      margin: 0;
      padding: 26px;
      border: 0;
      border-left: 1px solid var(--border);
      background: var(--surface);
      color: var(--text);
      overflow: auto;
    }
    dialog[open] {
      display: flex;
      flex-direction: column;
      gap: 18px;
      animation: slide 0.2s ease;
    }
    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }
    @keyframes slide {
      from {
        transform: translateX(40px);
        opacity: 0;
      }
    }
    .head,
    .controls {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }
    .close {
      margin-left: auto;
      padding: 4px 10px;
      border: 1px solid var(--ghost-border);
      border-radius: 6px;
      background: none;
      color: var(--text);
      cursor: pointer;
    }
    h2 {
      margin: 0;
      font-family: var(--font-heading);
      font-size: 22px;
      letter-spacing: -0.5px;
    }
    .sub {
      margin: 4px 0 0;
      color: var(--text-muted);
    }
    .fit {
      padding: 5px 10px;
      border-radius: 6px;
      font-family: var(--font-mono);
      font-size: 13px;
      font-weight: 700;
    }
    .high {
      color: var(--green);
      background: color-mix(in srgb, var(--green) 12%, transparent);
    }
    .mid {
      color: var(--amber);
      background: color-mix(in srgb, var(--amber) 12%, transparent);
    }
    .low {
      color: var(--text-faint);
      background: var(--chip-bg);
    }
    .reason {
      padding: 14px 16px;
      border: 1px solid var(--border);
      border-radius: 12px;
      background: var(--surface-2);
      font-size: 13px;
      line-height: 1.6;
    }
    .reason p {
      margin: 4px 0 0;
    }
    dl {
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 8px 12px;
      margin: 0;
      font-size: 13px;
    }
    dt {
      color: var(--text-faint);
    }
    dd {
      margin: 0;
      font-weight: 600;
    }
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin: 10px 0 0 5px;
      padding: 0 0 0 14px;
      border-left: 1px solid var(--border);
      list-style: none;
      font-size: 13px;
    }
    .timeline li {
      position: relative;
    }
    .timeline li::before {
      content: '';
      position: absolute;
      left: -19px;
      top: 5px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--purple);
    }
    .timeline .discarded {
      color: var(--red);
    }
    .timeline small {
      display: block;
      font-family: var(--font-mono);
      font-size: 10.5px;
      color: var(--text-faint);
    }
    .notes {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `,
})
export class JobDrawer {
  readonly job = input.required<Job>();
  readonly closed = output<void>();
  readonly stageChange = output<Stage>();
  readonly notesChange = output<string>();

  protected readonly t = injectFunnelText();
  protected readonly stages = STAGES;
  protected readonly fitClass = computed(() => 'fit ' + fitLevel(this.job().fit));
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly history = computed(() => {
    const format = new Intl.DateTimeFormat(this.t().locale, {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    return this.job().history.map((step) => ({ ...step, date: format.format(new Date(step.at)) }));
  });

  constructor() {
    afterNextRender(() => this.dialog().nativeElement.showModal());
  }

  protected onStageChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const stage = select.value as Stage;
    // Volta o select ao status atual; quem decide a mudança é o kanban
    // (descartar ainda passa pelo diálogo de motivo).
    select.value = this.job().stage;
    if (stage !== this.job().stage) this.stageChange.emit(stage);
  }

  protected onNotesBlur(event: Event): void {
    const notes = (event.target as HTMLTextAreaElement).value;
    if (notes !== this.job().notes) this.notesChange.emit(notes);
  }
}
