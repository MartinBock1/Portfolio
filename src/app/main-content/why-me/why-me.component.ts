import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
    imports: [TranslatePipe, TranslateDirective],
  
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  constructor(private translate: TranslateService) {}
    changeLanguage(language: string) {
      this.translate.use(language);
    }

}
