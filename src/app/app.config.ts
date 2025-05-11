import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient, withXsrfConfiguration, withInterceptorsFromDi } from "@angular/common/http";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideExperimentalZonelessChangeDetection(),
		provideRouter(routes),
		provideHttpClient(
			withXsrfConfiguration({
				cookieName: "csrftoken",
				headerName: "X-CSRFToken",
			}),
			withInterceptorsFromDi()
		),
	],
};
