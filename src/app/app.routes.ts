import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LandingpageComponent } from './features/landingpage/landingpage.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { MainpageComponent } from './features/mainpage/mainpage.component';
import { PreviewComponent } from './features/preview/preview.component';
import { VideoPlayerComponent } from './features/video-player/video-player.component';
import { ImprintComponent } from './shared/components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { VerifyEmailComponent } from './features/auth/verify-email/verify-email.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password.component';
import { ResetPasswordSentEmailComponent } from './features/auth/reset-password-sent-email/reset-password-sent-email.component';

export const routes: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'verify-email', component: VerifyEmailComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{
		path: 'reset-password-email-sent',
		component: ResetPasswordSentEmailComponent,
	},
	{ path: 'reset-password', component: ResetPasswordComponent },
	{ path: '', component: LandingpageComponent },
	{
		path: 'mainpage',
		component: MainpageComponent,
		canActivate: [AuthGuard],
	},
	{ path: 'preview', component: PreviewComponent, canActivate: [AuthGuard] },
	{
		path: 'video-player',
		component: VideoPlayerComponent,
		canActivate: [AuthGuard],
	},
	{ path: 'imprint', component: ImprintComponent },
	{ path: 'privacy-policy', component: PrivacyPolicyComponent },
];
