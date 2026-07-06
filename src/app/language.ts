import { Injectable, effect, signal } from '@angular/core';

export type Language = 'pt' | 'en';

const STORAGE_KEY = 'language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<Language>(readStoredLanguage());

  constructor() {
    effect(() => {
      const language = this.language();
      document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
      localStorage.setItem(STORAGE_KEY, language);
    });
  }

  set(language: Language): void {
    this.language.set(language);
  }
}

function readStoredLanguage(): Language {
  return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pt';
}
