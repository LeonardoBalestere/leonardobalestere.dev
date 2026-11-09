import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language';
import { CONTENT } from '../../data';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.html',
  styleUrl: './cases.scss',
})
export class Cases {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => CONTENT[this.languageService.language()]);
}
