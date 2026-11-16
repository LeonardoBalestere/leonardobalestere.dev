import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { LanguageService } from '../../language';
import { ThemeService } from '../../theme';
import { injectFunnelText } from '../funnel.i18n';

@Component({
  selector: 'app-funnel-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './funnel-layout.html',
  styleUrl: './funnel-layout.scss',
})
export class FunnelLayout {
  private readonly router = inject(Router);
  protected readonly themeService = inject(ThemeService);
  protected readonly languageService = inject(LanguageService);
  protected readonly t = injectFunnelText();

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

  /** Último segmento da rota, mostrado no caminho da marca. */
  protected readonly section = computed(() => {
    const segment = this.url().split(/[?#]/)[0].split('/').filter(Boolean)[1];
    return segment ?? '';
  });
}
