import { Component, computed, input } from '@angular/core';
import { COVERAGE_LEVELS, TermCoverage } from '../funnel.models';
import { injectFunnelText } from '../funnel.i18n';

@Component({
  selector: 'app-cv-coverage',
  template: `
    <div class="summary" aria-hidden="true">
      @for (part of parts(); track part.level) {
        <i [class]="part.level" [style.flex]="part.count"></i>
      }
    </div>
    <ul class="terms">
      @for (item of data(); track item.term) {
        <li [class]="item.level" [title]="t().coverage[item.level]">{{ item.term }}</li>
      }
    </ul>
    <div class="legend">
      @for (level of levels; track level) {
        <span><i [class]="level"></i>{{ t().coverage[level] }}</span>
      }
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .has {
      --c: var(--green);
    }
    .partial {
      --c: var(--blue);
    }
    .toConfirm {
      --c: var(--amber);
    }
    .gap {
      --c: var(--red);
    }
    .summary {
      display: flex;
      gap: 4px;
      height: 10px;
      border-radius: 99px;
      overflow: hidden;
    }
    .summary i {
      background: var(--c);
    }
    .terms {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .terms li {
      padding: 4px 10px;
      border-radius: 99px;
      border: 1px solid color-mix(in srgb, var(--c) 40%, transparent);
      background: color-mix(in srgb, var(--c) 8%, transparent);
      color: var(--c);
      font-size: 11.5px;
      font-weight: 600;
    }
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      font-size: 11.5px;
      color: var(--text-muted);
    }
    .legend span {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .legend i {
      width: 10px;
      height: 10px;
      border-radius: 3px;
      background: var(--c);
    }
  `,
})
export class CvCoverage {
  readonly data = input.required<TermCoverage[]>();
  protected readonly t = injectFunnelText();
  protected readonly levels = COVERAGE_LEVELS;

  protected readonly parts = computed(() =>
    COVERAGE_LEVELS.map((level) => ({
      level,
      count: this.data().filter((item) => item.level === level).length,
    })).filter((part) => part.count > 0),
  );
}
