// import { CommonModule } from '@angular/common';
// import { Component, Input } from '@angular/core';
// import { Project } from '../../../interfaces/project-interface.component';
// import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-single-project',
//   standalone: true,
//   imports: [CommonModule, TranslateModule],
//   templateUrl: './single-project.component.html',
//   styleUrl: './single-project.component.scss',
// })
// export class SingleProjectComponent {
  
//   constructor(private translate: TranslateService) {
//   }

  
//   changeLanguage(language: string) {
//     this.translate.use(language);   
     
//   }

//   @Input() project: Project = {
//     img: 'screenshot_pokedex.png',
//     project_about: 'project_about_pokedex',
//     project_duration: 'Duration 1 week',
//     project_about_text:
//       'The Pokedex Project is a collection and documentation of Pokémon, including information such as abilities, types, evolution, and origin of each Pokémon.',
//     project_organised:
//       '1. What should my Pokedex contain? 2. Where do I get the data for my Pokedex? 3. What should the user interface look like. How should the information be displayed? How does the user navigate through the Pokedex? Search function and filters: implement a search function to find Pokémon by name.',
//     project_experience:
//       'The task was to develop a Pokémon trainer registry, learning how to use APIs to retrieve Pokémon characteristics and making systems compatible.',
//   };
// }

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Project, Title } from '../../../interfaces/project-interface.component';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() project!: Project;
  

  translatedText: string = '';

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}

