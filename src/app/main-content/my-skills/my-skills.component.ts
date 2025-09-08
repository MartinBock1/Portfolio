import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  standalone: true,
    selector: 'app-my-skills',
    imports: [TranslatePipe],
    templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
