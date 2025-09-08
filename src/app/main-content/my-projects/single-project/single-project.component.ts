import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Project, Title } from '../../../interfaces/project-interface.component';

@Component({
  standalone: true,
    selector: 'app-single-project',
    imports: [CommonModule, TranslateModule],
    templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent {
  @Input() project!: Project;

  translatedText: string = '';

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}

