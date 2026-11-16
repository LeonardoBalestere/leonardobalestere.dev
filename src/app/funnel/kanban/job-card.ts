import { Component, computed, input, output } from '@angular/core';
import { Job } from '../funnel.models';
import { daysInStage } from '../data/funnel-store';
import { injectFunnelText } from '../funnel.i18n';

export function fitLevel(fit: number): 'high' | 'mid' | 'low' {
  return fit >= 80 ? 'high' : fit >= 65 ? 'mid' : 'low';
}

@Component({
  selector: 'app-job-card',
  template: `
    <article
      class="card-body"
      role="button"
      tabindex="0"
      [class.late]="late() && highlight()"
      (click)="open.emit()"
      (keydown.enter)="open.emit()"
      (keydown.space)="$event.preventDefault(); open.emit()"
    >
      <div class="top">
        <div>
          <h4>{{ job().title }}</h4>
          <span class="company">{{ job().company }}</span>
        </div>
        <span class="fit" [class]="fitClass()">{{ job().fit }}</span>
      </div>
      <div class="tags">
        @for (term of terms(); track term) {
          <span>{{ term }}</span>
        }
      </div>
      @if (job().discardReason; as reason) {
        <span class="reason">✕ {{ t().reasons[reason] }}</span>
      }
      @if (interview(); as next) {
        <span class="foot interview">📅 {{ next }}</span>
      }
      <div class="foot">
        <span>{{ job().channel }} · {{ t().originsShort[job().origin] }}</span>
        <span class="days" [class.warn]="late()">
          @if (late()) {
            ⏰
          }
          {{ days() === 0 ? t().kanban.today : t().kanban.daysShort(days()) }}
        </span>
      </div>
    </article>
  `,
  styles: `
    :host {
      display: block;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px 13px;
      border: 1px solid var(--border);
      border-radius: 12px;
      background: var(--surface-2);
      cursor: grab;
      outline: none;
      transition: border-color 0.15s ease;
    }
    .card-body:hover,
    .card-body:focus-visible {
      border-color: var(--purple);
    }
    .card-body.late {
      border-color: var(--amber);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--amber) 20%, transparent);
    }
    .top {
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }
    h4 {
      margin: 0;
      font-size: 13.5px;
      font-weight: 700;
      line-height: 1.3;
    }
    .company {
      font-size: 12px;
      color: var(--text-muted);
    }
    .fit {
      flex-shrink: 0;
      margin-left: auto;
      padding: 3px 7px;
      border-radius: 6px;
      font-family: var(--font-mono);
      font-size: 11px;
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
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .tags span {
      padding: 2px 7px;
      border: 1px solid var(--chip-border);
      border-radius: 99px;
      background: var(--chip-bg);
      color: var(--text-muted);
      font-size: 10.5px;
      font-weight: 600;
    }
    .reason {
      font-size: 11px;
      font-weight: 600;
      color: var(--red);
    }
    .foot {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 10.5px;
      color: var(--text-faint);
    }
    .interview {
      color: var(--amber);
    }
    .days {
      margin-left: auto;
    }
    .warn {
      color: var(--amber);
      font-weight: 600;
    }
  `,
})
export class JobCard {
  readonly job = input.required<Job>();
  readonly late = input(false);
  readonly highlight = input(false);
  readonly open = output<void>();

  protected readonly t = injectFunnelText();
  protected readonly days = computed(() => daysInStage(this.job()));
  protected readonly fitClass = computed(() => 'fit ' + fitLevel(this.job().fit));
  protected readonly terms = computed(() =>
    [...this.job().requiredTerms, ...this.job().niceToHaveTerms].slice(0, 3),
  );

  protected readonly interview = computed(() => {
    const next = this.job().nextInterview;
    if (!next) return null;
    const date = new Intl.DateTimeFormat(this.t().locale, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date(next.at));
    return `${this.t().interviews[next.kind]} · ${date}`;
  });
}
