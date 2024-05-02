import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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

  constructor(private translateService: TranslateService, private router: Router) {
    this.currentLanguage = localStorage.getItem('lang') || 'en-US';
    this.translateService.use(this.currentLanguage);
   }

   toggleLanguage() {
    const currentLanguage = this.translateService.currentLang;
    const newLanguage = currentLanguage === 'en-US' ? 'de-GER' : 'en-US';
    localStorage.setItem('lang', newLanguage);
    this.translateService.use(newLanguage);
    this.currentLanguage = newLanguage;

    this.router.navigate(['/privacy']).then(() => {
      window.location.reload();
    }).catch(err => {
      console.error('Fehler beim Navigieren zur Privacy-Policy-Komponente:', err);
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
