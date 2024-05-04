import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { AboveTheFoldComponent } from '../../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../../about-me/about-me.component';
import { MySkillsComponent } from '../../my-skills/my-skills.component';
import { PortfolioComponent } from '../../portfolio/portfolio.component';
import { ProjectComponent } from '../../project/project.component';
import { ContactComponent } from '../../contact/contact.component';
import { FooterComponent } from '../../footer/footer.component';
import { LanguageService } from '../../language.service';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    HeaderComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  constructor(private languageService: LanguageService) {}

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
