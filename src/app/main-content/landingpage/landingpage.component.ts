import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  isMenuVisible = false;
  activeLang: string = 'DE'; // Standardmäßig DE aktiv

  setActive(lang: string): void {
    this.activeLang = lang;
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible; // Toggle der Menü-Sichtbarkeit
  }
}
