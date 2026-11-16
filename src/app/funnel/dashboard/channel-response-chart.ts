import { Component, input } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { ChannelResponse } from '../funnel.models';

@Component({
  selector: 'app-channel-response-chart',
  imports: [PercentPipe],
  template: `
    @for (row of data(); track row.channel) {
      <div class="row">
        <span
          >{{ row.channel }} <small>n={{ row.applied }}</small></span
        >
        <div class="track"><i [style.width.%]="row.rate * 100"></i></div>
        <span class="value">{{ row.rate | percent }}</span>
      </div>
    }
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 11px;
    }
    .row {
      display: grid;
      grid-template-columns: 110px 1fr 44px;
      align-items: center;
      gap: 10px;
      font-size: 12.5px;
    }
    small {
      font-size: 10px;
      color: var(--text-faint);
    }
    .track {
      height: 8px;
      border-radius: 99px;
      background: var(--surface-2);
      overflow: hidden;
    }
    i {
      display: block;
      height: 100%;
      border-radius: 99px;
      background: var(--purple-light);
    }
    .value {
      font-family: var(--font-mono);
      font-size: 11px;
      text-align: right;
    }
  `,
})
export class ChannelResponseChart {
  readonly data = input.required<ChannelResponse[]>();
}
