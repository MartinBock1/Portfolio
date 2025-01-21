import { Component } from '@angular/core';
import {
  TranslateDirective,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  isMenuVisible = false;
  activeLang: string = 'DE'; // Standardmäßig DE aktiv

  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  setActive(lang: string): void {
    this.activeLang = lang;
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
