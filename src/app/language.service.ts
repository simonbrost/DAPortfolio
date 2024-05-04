import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'en-US';
  languageChanged: Subject<void> = new Subject<void>();

  constructor(private translateService: TranslateService) {
    this.currentLanguage = localStorage.getItem('lang') || 'en-US';
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'en-US' ? 'de-GER' : 'en-US';
    localStorage.setItem('lang', newLanguage);
    this.translateService.use(newLanguage);
    this.currentLanguage = newLanguage;
    this.languageChanged.next();
  }
}
