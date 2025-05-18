import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LandingpageComponent } from './features/landingpage/landingpage.component';
import { MainpageComponent } from './features/mainpage/mainpage.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ImprintComponent } from './shared/components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { VerifyEmailComponent } from './features/auth/verify-email/verify-email.component';

export const routes: Routes = [
	{ path: 'register', component: RegisterComponent },
	{
		path: '',
		component: LandingpageComponent,
	},
	{
		path: 'mainpage',
		component: MainpageComponent,
		canActivate: [AuthGuard],
	},
	{ path: 'imprint', component: ImprintComponent },
	{ path: 'verify-email', component: VerifyEmailComponent },
	{ path: 'privacy-policy', component: PrivacyPolicyComponent },
];
