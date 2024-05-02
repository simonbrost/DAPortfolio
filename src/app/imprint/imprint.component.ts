import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive, RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  currentLanguage: string | undefined;

  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0); 
    this.currentLanguage = localStorage.getItem('lang') || 'en-US'
  }

  isGerman(): boolean {
    return this.currentLanguage === 'de-GER';
  }
}
