import { Component, computed, inject } from '@angular/core';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { FunnelStore } from '../data/funnel-store';
import { injectFunnelText } from '../funnel.i18n';
import { StageConversionChart } from './stage-conversion-chart';
import { ChannelResponseChart } from './channel-response-chart';
import { FitComparison } from './fit-comparison';
import { DailyNewChart } from './daily-new-chart';
import { CvCoverage } from './cv-coverage';

@Component({
  selector: 'app-dashboard',
  imports: [
    DecimalPipe,
    PercentPipe,
    StageConversionChart,
    ChannelResponseChart,
    FitComparison,
    DailyNewChart,
    CvCoverage,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly store = inject(FunnelStore);
  protected readonly t = injectFunnelText();

  protected readonly activeJobs = computed(
    () => this.store.jobs().filter((job) => job.stage !== 'discarded').length,
  );

  protected readonly newToday = computed(() => {
    const today = new Date().toDateString();
    return this.store.jobs().filter((job) => new Date(job.history[0].at).toDateString() === today)
      .length;
  });

  protected readonly interviews = computed(() =>
    this.store.jobs().filter((job) => job.stage === 'interview'),
  );

  protected readonly nextInterview = computed(() => {
    const dates = this.interviews()
      .map((job) => job.nextInterview?.at)
      .filter((at): at is string => !!at)
      .sort();
    if (!dates.length) return null;
    return new Intl.DateTimeFormat(this.t().locale, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date(dates[0]));
  });

  protected readonly updatedAgo = computed(() => {
    const summary = this.store.summary();
    if (!summary) return '';
    const minutes = Math.max(0, Math.round((Date.now() - Date.parse(summary.updatedAt)) / 60000));
    return new Intl.RelativeTimeFormat(this.t().locale, { numeric: 'auto' }).format(
      -minutes,
      'minute',
    );
  });
}
