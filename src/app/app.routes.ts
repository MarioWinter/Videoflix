import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
    },
    {
        path: 'mainpage',
        component: MainpageComponent
    }
];
