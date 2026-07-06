import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language';
import { CONTENT, LINKS } from '../../data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly languageService = inject(LanguageService);
  protected readonly t = computed(() => CONTENT[this.languageService.language()]);
  protected readonly links = LINKS;
}
