import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



export const routes: Routes = [
    { path: 'bearbeiten', component: ImprintComponent },
    { path:'impressum', component: PrivacyPolicyComponent },
];
