import { Component, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../theme';
import { LanguageService } from '../../language';
import { CONTENT } from '../../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly themeService = inject(ThemeService);
  protected readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => CONTENT[this.languageService.language()]);
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
