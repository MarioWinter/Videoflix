// core/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

/**
 * Route guard that allows navigation only if the user is authenticated.
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	constructor(private auth: AuthService, private router: Router) {}

	canActivate(): Observable<boolean | UrlTree> {
		return this.auth.isLoggedIn$.pipe(
			map((loggedIn) => loggedIn || this.router.createUrlTree(['/login']))
		);
	}
}
