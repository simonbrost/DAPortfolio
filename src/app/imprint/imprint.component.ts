import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive, RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
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
