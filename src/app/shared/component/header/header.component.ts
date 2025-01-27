import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  activeLang: string = 'DE'; // Standardmäßig DE aktiv
  activeSection: string = ''; // Standardmäßig keins aktiv
  isSticky: boolean = false; // Flag für den Sticky-Zustand

  private headerOffsetTop!: number;

  constructor(private translate: TranslateService, private el: ElementRef) {}

  ngOnInit() {
    // Setze den Offset des Headers
    this.headerOffsetTop = this.el.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.pageYOffset > this.headerOffsetTop) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

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
