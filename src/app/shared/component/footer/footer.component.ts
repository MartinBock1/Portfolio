import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  constructor(private translate: TranslateService) {}
    changeLanguage(language: string) {
      this.translate.use(language);
    }

    scrollToTop(): void {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
}
