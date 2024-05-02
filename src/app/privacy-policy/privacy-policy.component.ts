import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  
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
