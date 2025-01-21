import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLang: string = 'DE'; // Standardmäßig DE aktiv
  activeSection: string = ''; // Standardmäßig keins aktiv

  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  setActive(lang: string): void {
    this.activeLang = lang;
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
  }
}
