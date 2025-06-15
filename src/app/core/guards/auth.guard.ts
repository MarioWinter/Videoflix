import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

/**
 * Route guard that allows navigation only if the user is authenticated.
 * It relies on a client-side login state observable rather than an HTTP call.
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	constructor(private auth: AuthService, private router: Router) {}

	/**
	 * Determines whether navigation is allowed.
	 * Subscribes to the `isLoggedIn$` stream and:
	 * - If `true`, returns `true` to allow activation.
	 * - If `false`, returns a UrlTree to redirect to `/login`.
	 *
	 * @returns An Observable emitting `true` or a redirect UrlTree.
	 */
	canActivate(): Observable<boolean | UrlTree> {
		return this.auth.isLoggedIn$.pipe(
			map((loggedIn) => loggedIn || this.router.createUrlTree(['/login']))
		);
	}
}
