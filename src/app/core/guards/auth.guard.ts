import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable, map, catchError, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
	constructor(private auth: AuthService, private router: Router) {}

	/**
	 * Determines whether the user is currently authenticated.
	 *
	 * @remarks
	 * This method attempts to fetch the authenticated user's details using the `getUserDetails()` call.
	 * If the request is successful, it returns `true`, allowing route activation.
	 * If it fails (e.g., due to expired session or missing token), it redirects the user to the login page.
	 *
	 * @returns An observable that emits `true` if access is granted, or a `UrlTree` redirecting to `/login` if not.
	 */
	canActivate(): Observable<boolean | UrlTree> {
		return this.auth.getUserDetails().pipe(
			map(() => true),
			catchError(() => of(this.router.createUrlTree(["/login"])))
		);
	}
}
