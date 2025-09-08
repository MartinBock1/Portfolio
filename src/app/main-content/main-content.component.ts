import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ColleaguesReviewsComponent } from './colleagues-reviews/colleagues-reviews.component';

@Component({
    standalone: true,
    selector: 'app-main-content',
    imports: [
        LandingpageComponent,
        HeaderComponent,
        WhyMeComponent,
        MySkillsComponent,
        MyProjectsComponent,
        ColleaguesReviewsComponent,
        ContactMeComponent,
    ],
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {}
