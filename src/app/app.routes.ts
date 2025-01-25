import { Routes } from '@angular/router';
import { LandingpageComponent } from './main-content/landingpage/landingpage.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent },
];
