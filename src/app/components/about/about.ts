import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language';
import { CONTENT } from '../../data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => CONTENT[this.languageService.language()]);
}
