import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language';
import { CONTENT, LINKS } from '../../data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => CONTENT[this.languageService.language()]);
  protected readonly links = LINKS;
}
