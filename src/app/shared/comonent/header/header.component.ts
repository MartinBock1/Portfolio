import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLang: string = 'DE'; // Standardmäßig DE aktiv
  activeSection: string = ''; // Standardmäßig keins aktiv

  setActive(lang: string): void {
    this.activeLang = lang;
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }
}
