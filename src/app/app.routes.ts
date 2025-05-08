import { Routes } from "@angular/router";
import { LandingpageComponent } from "./features/landingpage/landingpage.component";
import { MainpageComponent } from "./features/mainpage/mainpage.component";
import { RegisterComponent } from "./features/auth/register/register.component";
import { ImprintComponent } from "./shared/components/imprint/imprint.component";
import { PrivacyPolicyComponent } from "./shared/components/privacy-policy/privacy-policy.component";
import { PreviewComponent } from "./features/preview/preview.component";
import { VideoPlayerComponent } from "./features/video-player/video-player.component";

export const routes: Routes = [
	{
		path: "",
		component: LandingpageComponent,
	},
	{
		path: "register",
		component: RegisterComponent,
	},
	{
		path: "mainpage",
		component: MainpageComponent,
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
];
