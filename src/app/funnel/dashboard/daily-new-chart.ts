import { Component, computed, input } from '@angular/core';
import { DailyNewJobs } from '../funnel.models';
import { injectFunnelText } from '../funnel.i18n';

@Component({
  selector: 'app-daily-new-chart',
  template: `
    <div class="cols" role="img" [attr.aria-label]="t().dashboard.dailyTitle">
      @for (day of days(); track day.date) {
        <div class="col" [title]="day.label">
          <i class="auto" [style.height.%]="day.auto"></i>
          <i class="mail" [style.height.%]="day.mail"></i>
          <i class="manual" [style.height.%]="day.manual"></i>
        </div>
      }
    </div>
    @if (days().length) {
      <div class="axis">
        <span>{{ days()[0].short }}</span
        ><span>{{ days()[days().length - 1].short }}</span>
      </div>
    }
    <div class="legend">
      <span><i class="auto"></i>{{ t().origins.automatedSearch }}</span>
      <span><i class="mail"></i>{{ t().origins.emailAlert }}</span>
      <span><i class="manual"></i>{{ t().origins.manual }}</span>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .cols {
      display: flex;
      align-items: flex-end;
      gap: 5px;
      height: 120px;
    }
    .col {
      flex: 1;
      display: flex;
      flex-direction: column-reverse;
      gap: 2px;
      height: 100%;
    }
    i {
      display: block;
      border-radius: 3px;
    }
    .auto {
      background: var(--purple);
    }
    .mail {
      background: var(--purple-lighter);
      opacity: 0.75;
    }
    .manual {
      background: var(--green);
    }
    .axis {
      display: flex;
      justify-content: space-between;
      font-family: var(--font-mono);
      font-size: 10px;
      color: var(--text-faint);
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
    }
  `,
})
export class DailyNewChart {
  readonly data = input.required<DailyNewJobs[]>();
  protected readonly t = injectFunnelText();

  protected readonly days = computed(() => {
    const data = this.data();
    const max = Math.max(...data.map((d) => d.automatedSearch + d.emailAlert + d.manual), 1);
    const short = new Intl.DateTimeFormat(this.t().locale, { day: '2-digit', month: '2-digit' });
    return data.map((d) => {
      const date = new Date(d.date + 'T12:00:00');
      const total = d.automatedSearch + d.emailAlert + d.manual;
      return {
        date: d.date,
        short: short.format(date),
        label: `${short.format(date)} · ${total}`,
        auto: (d.automatedSearch / max) * 100,
        mail: (d.emailAlert / max) * 100,
        manual: (d.manual / max) * 100,
      };
    });
  });
}
