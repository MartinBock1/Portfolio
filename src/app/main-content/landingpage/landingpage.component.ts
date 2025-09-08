import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  TranslateDirective,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  standalone: true,
    selector: 'app-landingpage',
    imports: [CommonModule, TranslatePipe],
    templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
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
