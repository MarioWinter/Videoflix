import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from "./features/auth/register/register.component";

export const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
    },
    {
        path: 'mainpage',
        component: MainpageComponent
    },
  	{
        path: 'register',
        component: RegisterComponent,
	  },
];
