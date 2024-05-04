import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  currentLanguage: string | undefined;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    window.scrollTo(0, 0); 
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.languageChanged.subscribe(() => {
      this.currentLanguage = this.languageService.getCurrentLanguage();
    });
  }

  isGerman(): boolean {
    return this.currentLanguage === 'de-GER';
  }
}
