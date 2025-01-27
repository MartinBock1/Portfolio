import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalnoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'legal', component: LegalnoticeComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];
