import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  

  constructor() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
