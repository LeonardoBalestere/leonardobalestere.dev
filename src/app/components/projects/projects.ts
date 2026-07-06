import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language';
import { CONTENT, LINKS } from '../../data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => CONTENT[this.languageService.language()]);
  protected readonly links = LINKS;
}
