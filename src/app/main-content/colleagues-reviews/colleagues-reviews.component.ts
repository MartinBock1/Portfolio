import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
    selector: 'app-colleagues-reviews',
    imports: [TranslatePipe],
    templateUrl: './colleagues-reviews.component.html',
  styleUrls: ['./colleagues-reviews.component.scss']
})
export class ColleaguesReviewsComponent {
  constructor(private translate: TranslateService) {}
    changeLanguage(language: string) {
      this.translate.use(language);
    }
  }