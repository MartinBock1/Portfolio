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
  selectedFrontendIndex = 0;
  selectedBackendIndex = 0;

  titles: Title[] = [
    {
      pokedex: '1. Pokedex',
      game: '2. El Pollo Loco',
      join: '3. Join',
      kanmind: '4. KanMind',
      coderr: '5. Coderr',
      videoflix: '6. VideoFlix',
      ongoing: 'title.nav_title',
      project1: 'title.project1',
      project2: 'title.project2',
      project3: 'title.project3',
      project4: 'title.project4',
      project5: 'title.project5',
      project6: 'title.project6',
      project7: 'title.project7',
    },
  ];

  allProjects: Project[] = [
    {
      index: 0,
      img: 'screenshot_pokedex.png',
      project_title: 'project.project_title_pokedex',
      project_about: 'project.project_about_pokedex',
      project_duration: 'project.project_duration_pokedex',
      project_about_text: 'project.project_about_text_pokedex',
      project_organized: 'project.project_organized_pokedex',
      project_organized_text: 'project.project_organized_text_pokedex',
      project_experience: 'project.project_experience_pokedex',
      project_experience_text: 'project.project_experience_text_pokedex',
      project_link_live: 'project.link_live_pokedex',
      project_link_github: 'project.link_github_pokedex',
      project_icon_html: 'assets/img/icons/skills/html.svg',
      project_icon_css: 'assets/img/icons/skills/css.svg',
      project_icon_js: 'assets/img/icons/skills/javascript.svg',
      project_icon_angular: '',
      project_icon_typescript: '',
      project_icon_vue_js: '',
      project_icon_react: '',
      project_icon_python: '',
      project_icon_django: '',
    },
    {
      index: 1,
      img: 'screenshot_game.png',
      project_title: 'project.project_title_game',
      project_about: 'project.project_about_game',
      project_duration: 'project.project_duration_game',
      project_about_text: 'project.project_about_text_game',
      project_organized: 'project.project_organized_game',
      project_organized_text: 'project.project_organized_text_game',
      project_experience: 'project.project_experience_game',
      project_experience_text: 'project.project_experience_text_game',
      project_link_live: 'project.link_live_game',
      project_link_github: 'project.link_github_game',
      project_icon_html: 'assets/img/icons/skills/html.svg',
      project_icon_css: 'assets/img/icons/skills/css.svg',
      project_icon_js: 'assets/img/icons/skills/javascript.svg',
      project_icon_angular: '',
      project_icon_typescript: '',
      project_icon_vue_js: '',
      project_icon_react: '',
      project_icon_python: '',
      project_icon_django: '',
    },
    {
      index: 2,
      img: 'screenshot_join.png',
      project_title: 'project.project_title_join',
      project_about: 'project.project_about_join',
      project_duration: 'project.project_duration_join',
      project_about_text: 'project.project_about_text_join',
      project_organized: 'project.project_organized_join',
      project_organized_text: 'project.project_organized_text_join',
      project_experience: 'project.project_experience_join',
      project_experience_text: 'project.project_experience_text_join',
      project_link_live: 'project.link_live_join',
      project_link_github: 'project.link_github_join',
      project_icon_html: 'assets/img/icons/skills/html.svg',
      project_icon_css: 'assets/img/icons/skills/css.svg',
      project_icon_js: '',
      project_icon_angular: 'assets/img/icons/skills/angular.svg',
      project_icon_typescript: '',
      project_icon_vue_js: '',
      project_icon_react: '',
      project_icon_python: '',
      project_icon_django: '',
    },
    {
      index: 3,
      img: 'screenshot_comming_soon.png',
      project_title: 'project.project_title_ongoinig',
      project_about: 'project.project_about_ongoinig',
      project_duration: 'project.project_duration_ongoinig',
      project_about_text: 'project.project_about_text_ongoinig',
      project_organized: 'project.project_organized_ongoinig',
      project_organized_text: 'project.project_organized_text_ongoinig',
      project_experience: 'project.project_experience_ongoinig',
      project_experience_text: 'project.project_experience_text_ongoinig',
      project_link_live: '',
      project_link_github: '',
      project_icon_html: 'assets/img/icons/skills/html.svg',
      project_icon_css: 'assets/img/icons/skills/css.svg',
      project_icon_js: '',
      project_icon_angular: 'assets/img/icons/skills/angular.svg',
      project_icon_typescript: 'assets/img/icons/skills/typescript.svg',
      project_icon_vue_js: 'assets/img/icons/vue_js.svg',
      project_icon_react: 'assets/img/icons/react.svg',
      project_icon_python: '',
      project_icon_django: '',
    },
    {
      index: 4,
      img: 'screenshot_kanmind.png',
      project_title: 'project.project_title_kanmind',
      project_about: 'project.project_about_kanmind',
      project_duration: 'project.project_duration_kanmind',
      project_about_text: 'project.project_about_text_kanmind',
      project_organized: 'project.project_organized_kanmind',
      project_organized_text: 'project.project_organized_text_kanmind',
      project_experience: 'project.project_experience_kanmind',
      project_experience_text: 'project.project_experience_text_kanmind',
      project_link_live: 'project.link_live_kanmind',
      project_link_github: 'project.link_github_kanmind',
      project_icon_html: '',
      project_icon_css: '',
      project_icon_js: '',
      project_icon_angular: '',
      project_icon_typescript: '',
      project_icon_vue_js: '',
      project_icon_react: '',
      project_icon_python: 'assets/img/icons/skills/backend/python.svg',
      project_icon_django: 'assets/img/icons/skills/backend/django.svg',
    },
    {
      index: 5,
      img: 'screenshot_coderr.png',
      project_title: 'project.project_title_coderr',
      project_about: 'project.project_about_coderr',
      project_duration: 'project.project_duration_coderr',
      project_about_text: 'project.project_about_text_coderr',
      project_organized: 'project.project_organized_coderr',
      project_organized_text: 'project.project_organized_text_coderr',
      project_experience: 'project.project_experience_coderr',
      project_experience_text: 'project.project_experience_text_coderr',
      project_link_live: 'project.link_live_coderr',
      project_link_github: 'project.link_github_coderr',
      project_icon_html: '',
      project_icon_css: '',
      project_icon_js: '',
      project_icon_angular: '',
      project_icon_typescript: '',
      project_icon_vue_js: '',
      project_icon_react: '',
      project_icon_python: 'assets/img/icons/skills/backend/python.svg',
      project_icon_django: 'assets/img/icons/skills/backend/django.svg',
    },
    {
      index: 6,
      img: 'screenshot_comming_soon.png',
      project_title: 'project.project_title_videoflix',
      project_about: 'project.project_about_videoflix',
      project_duration: 'project.project_duration_videoflix',
      project_about_text: 'project.project_about_text_videoflix',
      project_organized: 'project.project_organized_videoflix',
      project_organized_text: 'project.project_organized_text_videoflix',
      project_experience: 'project.project_experience_videoflix',
      project_experience_text: 'project.project_experience_text_videoflix',
      project_link_live: 'project.link_live_videoflix',
      project_link_github: 'project.link_github_videoflix',
      project_icon_html: '',
      project_icon_css: '',
      project_icon_js: '',
      project_icon_angular: '',
      project_icon_typescript: '',
      project_icon_vue_js: '',
      project_icon_react: '',
      project_icon_python: 'assets/img/icons/skills/backend/python.svg',
      project_icon_django: 'assets/img/icons/skills/backend/django.svg',
    },
  ];

  frontendProjects: Project[] = [];
  backendProjects: Project[] = [];

  selectFrontendProject(index: number): void {
    this.selectedFrontendIndex = index;
  }

  // new function for the second group
  selectBackendProject(index: number): void {
    this.selectedBackendIndex = index;
  }

  constructor(private translate: TranslateService) {
    this.frontendProjects = this.allProjects.slice(0, 3); // Projects 0, 1, 2, 3
    this.backendProjects = this.allProjects.slice(4, 7);  // Projekte 4, 5, 6
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
