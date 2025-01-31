import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from './../../interfaces/project-interface.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
  selectedProjectIndex = 0;

  projects: Project[] = [
    {
      img: 'screenshot_pokedex.png',
      project_about: 'project_about_pokedex', // Übersetzungs-Schlüssel
      project_duration: 'project_duration_pokedex', // Übersetzungs-Schlüssel
      project_about_text:
        'The Pokedex Project is a collection and documentation of Pokémon, including information such as abilities, types, evolution, and origin of each Pokémon.',
      project_organised:
        '1. What should my Pokedex contain? 2. Where do I get the data for my Pokedex? 3. What should the user interface look like. How should the information be displayed? How does the user navigate through the Pokedex? Search function and filters: implement a search function to find Pokémon by name.',
      project_experience:
        'The task was to develop a Pokémon trainer registry, learning how to use APIs to retrieve Pokémon characteristics and making systems compatible.',
    },
    {
      img: 'screenshot_game.png',
      project_about: 'About the project', // Übersetzungs-Schlüssel
      project_duration: 'Duration', // Übersetzungs-Schlüssel
      project_about_text: '',
      project_organised: '',
      project_experience: '',
    },
    {
      img: 'screenshot_join.png',
      project_about: 'About the project', // Übersetzungs-Schlüssel
      project_duration: 'Duration', // Übersetzungs-Schlüssel
      project_about_text: '',
      project_organised: '',
      project_experience: '',
    },
  ];

  selectedProject(index: number): void {
    this.selectedProjectIndex = index;
  }
}
