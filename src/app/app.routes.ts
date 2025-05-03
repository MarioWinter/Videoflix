import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from "./features/auth/register/register.component";
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
	  },
    {
        path: 'mainpage',
        component: MainpageComponent
    },
    { 
        path: 'imprint',
        component: ImprintComponent
    },
    { 
        path:'privacy-policy',
        component: PrivacyPolicyComponent
    },
];
