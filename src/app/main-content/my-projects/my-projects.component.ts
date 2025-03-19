import { Component } from '@angular/core';
import { Project, Title } from './../../interfaces/project-interface.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
  selectedProjectIndex = 0;

  titles: Title[] = [
    {
      pokedex: '1. Pokedex',
      game: '2. El Pollo Loco',
      join: '3. Join',
      ongoing: 'title.nav_title',
      project1: 'title.project1',
      project2: 'title.project2',
      project3: 'title.project3',
      project4: 'title.project4',
    },
  ];

  projects: Project[] = [
    {
      index: 0,
      img: 'screenshot_pokedex.png',
      project_title: 'project.project_title_pokedex',
      project_about: 'project.project_about_pokedex',
      project_duration: 'project.project_duration_pokedex',
      project_about_text: 'project.project_about_text_pokedex',
      project_organised: 'project.project_organised_pokedex',
      project_organised_text: 'project.project_organised_text_pokedex',
      project_experience: 'project.project_experience_pokedex',
      project_experience_text: 'project.project_experience_text_pokedex',
      project_link_live: 'project.link_live_pokedex',
      project_link_github: 'project.link_github_pokedex',
      project_icon_html: 'assets/img/icons/skills/html.svg',
      project_icon_css: 'assets/img/icons/skills/css.svg',
      project_icon_js: 'assets/img/icons/skills/javascript.svg',
      project_icon_angular: '',
      project_icon_typescrip: '',
      project_icon_vue_js: '',
      project_icon_react: '',
    },
    {
      index: 1,
      img: 'screenshot_game.png',
      project_title: 'project.project_title_game',
      project_about: 'project.project_about_game',
      project_duration: 'project.project_duration_game',
      project_about_text: 'project.project_about_text_game',
      project_organised: 'project.project_organised_game',
      project_organised_text: 'project.project_organised_text_game',
      project_experience: 'project.project_experience_game',
      project_experience_text: 'project.project_experience_text_game',
      project_link_live: 'project.link_live_game',
      project_link_github: 'project.link_github_game',
      project_icon_html: 'assets/img/icons/skills/html.svg',
      project_icon_css: 'assets/img/icons/skills/css.svg',
      project_icon_js: 'assets/img/icons/skills/javascript.svg',
      project_icon_angular: '',
      project_icon_typescrip: '',
      project_icon_vue_js: '',
      project_icon_react: '',
    },
    {
      index: 2,
      img: 'screenshot_join.png',
      project_title: 'project.project_title_join',
      project_about: 'project.project_about_join',
      project_duration: 'project.project_duration_join',
      project_about_text: 'project.project_about_text_join',
      project_organised: 'project.project_organised_join',
      project_organised_text: 'project.project_organised_text_join',
      project_experience: 'project.project_experience_join',
      project_experience_text: 'project.project_experience_text_join',
      project_link_live: 'project.link_live_join',
      project_link_github: 'project.link_github_join',
      project_icon_html: 'assets/img/icons/skills/html.svg',
      project_icon_css: 'assets/img/icons/skills/css.svg',
      project_icon_js: '',
      project_icon_angular: 'assets/img/icons/skills/angular.svg',
      project_icon_typescrip: '',
      project_icon_vue_js: '',
      project_icon_react: '',
    },

    {
      index: 3,
      img: 'screenshot_comming_soon.png',
      project_title: 'project.project_title_ongoinig',
      project_about: 'project.project_about_ongoinig',
      project_duration: 'project.project_duration_ongoinig',
      project_about_text: 'project.project_about_text_ongoinig',
      project_organised: 'project.project_organised_ongoinig',
      project_organised_text: 'project.project_organised_text_ongoinig',
      project_experience: 'project.project_experience_ongoinig',
      project_experience_text: 'project.project_experience_text_ongoinig',
      project_link_live: '',
      project_link_github: '',
      project_icon_html: 'assets/img/icons/skills/html.svg',
      project_icon_css: 'assets/img/icons/skills/css.svg',
      project_icon_js: '',
      project_icon_angular: 'assets/img/icons/skills/angular.svg',
      project_icon_typescrip: 'assets/img/icons/skills/typescript.svg',
      project_icon_vue_js: 'assets/img/icons/vue_js.svg',
      project_icon_react: 'assets/img/icons/react.svg',
    },
  ];

  selectedProject(index: number): void {
    this.selectedProjectIndex = index;
  }

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
