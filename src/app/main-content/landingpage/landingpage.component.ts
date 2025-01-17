import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  activeLang: string = 'DE'; // Standardmäßig DE aktiv
  activeSection: string = ''; // Standardmäßig keins aktiv
  respMenuClosed: boolean = true;

  setActive(lang: string): void {
    this.activeLang = lang;
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  toggleRespMenu(): void {
    this.respMenuClosed = !this.respMenuClosed;
  }
}
