import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from '../shared/comonent/header/header.component';
import { WhyMeComponent } from './why-me/why-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingpageComponent, HeaderComponent, WhyMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
