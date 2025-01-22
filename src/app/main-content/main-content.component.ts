import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from '../shared/comonent/header/header.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingpageComponent, HeaderComponent, WhyMeComponent, MySkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
