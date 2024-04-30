import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  currentLanguage: string = 'en-US';

  constructor(private translateService: TranslateService) { }

  toggleLanguage() {
    const currentLanguage = this.translateService.currentLang;
    const newLanguage = currentLanguage === 'en-US' ? 'de-GER' : 'en-US';
    this.translateService.use(newLanguage);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
