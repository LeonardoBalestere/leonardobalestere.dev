import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language';
import { CONTENT } from '../../data';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.html',
  styleUrl: './ai.scss',
})
export class Ai {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => CONTENT[this.languageService.language()]);
}
