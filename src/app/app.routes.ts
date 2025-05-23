import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LandingpageComponent } from './features/landingpage/landingpage.component';
import { MainpageComponent } from './features/mainpage/mainpage.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ImprintComponent } from './shared/components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { VerifyEmailComponent } from './features/auth/verify-email/verify-email.component';
import { PreviewComponent } from "./features/preview/preview.component";
import { VideoPlayerComponent } from "./features/video-player/video-player.component";

export const routes: Routes = [
	{ 
    path: 'register', component: RegisterComponent 
  },
	{
		path: '',
		component: LandingpageComponent,
	},
	{
		path: 'mainpage',
		component: MainpageComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "preview",
		component: PreviewComponent,
	},
	{
		path: "video-player",
		component: VideoPlayerComponent,
	},
	{
		path: "imprint",
		component: ImprintComponent,
	},
	{
		path: "privacy-policy",
		component: PrivacyPolicyComponent,
	},
	{ 
    path: 'verify-email', 
    component: VerifyEmailComponent, 
  },
];
