import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-colleagues-reviews',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './colleagues-reviews.component.html',
  styleUrl: './colleagues-reviews.component.scss',
})
export class ColleaguesReviewsComponent {
  constructor(private translate: TranslateService) {}
    changeLanguage(language: string) {
      this.translate.use(language);
    }
  }