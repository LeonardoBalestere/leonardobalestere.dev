import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FunnelStore } from '../data/funnel-store';
import { injectFunnelText } from '../funnel.i18n';

@Component({
  selector: 'app-workspace',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './workspace.html',
  styleUrl: './workspace.scss',
})
export class Workspace {
  private readonly router = inject(Router);
  protected readonly store = inject(FunnelStore);
  protected readonly t = injectFunnelText();

  protected readonly today = computed(() =>
    new Intl.DateTimeFormat(this.t().locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(new Date()),
  );

  protected readonly greeting = computed(() => {
    const hour = new Date().getHours();
    const { morning, afternoon, evening } = this.t().workspace.greeting;
    return hour < 12 ? morning : hour < 18 ? afternoon : evening;
  });

  protected readonly lastRunTime = computed(() => {
    const summary = this.store.summary();
    return summary ? this.formatTime(summary.lastRun.at) : '';
  });

  protected readonly nextEmail = computed(() => {
    const summary = this.store.summary();
    if (!summary) return '';
    return new Intl.DateTimeFormat(this.t().locale, {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(summary.reminders.nextEmailAt));
  });

  constructor() {
    void this.store.load();
  }

  protected highlightLate(): void {
    this.store.highlightLate.set(true);
    void this.router.navigate(['/funnel/kanban']);
  }

  private formatTime(iso: string): string {
    return new Intl.DateTimeFormat(this.t().locale, { hour: '2-digit', minute: '2-digit' }).format(
      new Date(iso),
    );
  }
}
