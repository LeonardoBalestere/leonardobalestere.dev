import { Component, computed, input } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { StageConversion } from '../funnel.models';
import { injectFunnelText } from '../funnel.i18n';

@Component({
  selector: 'app-stage-conversion-chart',
  imports: [PercentPipe],
  template: `
    @for (row of rows(); track row.stage) {
      <div class="row">
        <span class="name">{{ t().stages[row.stage] }}</span>
        <div class="bar">
          <i [style.width.%]="row.width">{{ row.reached }}</i>
        </div>
        <span class="conv">
          @if (row.next !== null) {
            <b>{{ row.next | percent }}</b> →
          }
          @if (row.avgDays !== undefined) {
            {{ t().dashboard.days(row.avgDays) }}
          }
        </span>
      </div>
    }
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .row {
      display: grid;
      grid-template-columns: 96px 1fr 104px;
      align-items: center;
      gap: 12px;
      font-size: 13px;
    }
    .name {
      font-weight: 600;
      color: var(--text-muted);
    }
    .bar {
      height: 26px;
      border-radius: 7px;
      background: var(--surface-2);
      overflow: hidden;
    }
    i {
      display: flex;
      align-items: center;
      height: 100%;
      min-width: 34px;
      padding-left: 10px;
      border-radius: 7px;
      background: var(--purple);
      color: #fff;
      font-style: normal;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 600;
    }
    .conv {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--text-faint);
      text-align: right;
    }
    b {
      color: var(--text);
      font-weight: 600;
    }
  `,
})
export class StageConversionChart {
  readonly data = input.required<StageConversion[]>();
  protected readonly t = injectFunnelText();

  protected readonly rows = computed(() => {
    const data = this.data();
    const top = Math.max(...data.map((row) => row.reached), 1);
    return data.map((row, i) => ({
      ...row,
      width: Math.max((row.reached / top) * 100, 6),
      next: i < data.length - 1 && row.reached ? data[i + 1].reached / row.reached : null,
    }));
  });
}
