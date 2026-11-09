import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language';
import { CONTENT } from '../../data';

@Component({
  selector: 'app-results',
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => CONTENT[this.languageService.language()]);
}
