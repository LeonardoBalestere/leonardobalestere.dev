import { Component, input } from '@angular/core';
import { injectFunnelText } from '../funnel.i18n';

@Component({
  selector: 'app-fit-comparison',
  template: `
    <div class="pair">
      <div>
        <span class="big advanced">{{ fit().advanced }}</span>
        <span class="label">{{ t().dashboard.fitAdvanced }}</span>
      </div>
      <div>
        <span class="big">{{ fit().discarded }}</span>
        <span class="label">{{ t().dashboard.fitDiscarded }}</span>
      </div>
    </div>
    <div class="scale" aria-hidden="true">
      <b [style.left.%]="fit().discarded"></b>
      <b [style.left.%]="fit().advanced"></b>
    </div>
    <div class="ticks" aria-hidden="true"><span>0</span><span>50</span><span>100</span></div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .pair {
      display: flex;
      gap: 14px;
      margin-bottom: 6px;
    }
    .pair > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 16px;
      border-radius: 12px;
      background: var(--surface-2);
    }
    .big {
      font-family: var(--font-heading);
      font-size: 32px;
      font-weight: 700;
      color: var(--text-muted);
    }
    .advanced {
      color: var(--green);
    }
    .label {
      font-size: 12px;
      color: var(--text-muted);
    }
    .scale {
      position: relative;
      height: 8px;
      border-radius: 99px;
      background: linear-gradient(90deg, var(--surface-2), var(--purple));
    }
    .scale b {
      position: absolute;
      top: -5px;
      width: 3px;
      height: 18px;
      border-radius: 2px;
      background: var(--text);
    }
    .ticks {
      display: flex;
      justify-content: space-between;
      font-family: var(--font-mono);
      font-size: 10px;
      color: var(--text-faint);
    }
  `,
})
export class FitComparison {
  readonly fit = input.required<{ advanced: number; discarded: number }>();
  protected readonly t = injectFunnelText();
}
