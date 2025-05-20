import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface RegisterPayload {
	email: string;
	password1: string;
	password2: string;
}

export interface LoginPayload {
	email: string;
	password: string;
}

/**
 * Service responsible for all authentication-related HTTP calls
 * and for maintaining the client’s login state.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
	private readonly baseUrl = '/api/auth';

	/**
	 * Tracks whether the user is currently logged in.
	 */
	private loggedInSubject = new BehaviorSubject<boolean>(false);
	/**
	 * Observable stream of the user’s login state for guards and components.
	 */
	public isLoggedIn$ = this.loggedInSubject.asObservable();

	constructor(private http: HttpClient) {
		const hasToken = document.cookie.includes('access_token=');
		this.loggedInSubject.next(hasToken);
	}
	/**
	 * Performs a GET request to fetch and set the CSRF cookie.
	 *
	 * @returns An Observable emitting the server’s response once the CSRF cookie is set.
	 */
	getCsrfToken(): Observable<any> {
		return this.http.get(`${this.baseUrl}/csrf/`, {
			withCredentials: true,
		});
	}

	/**
	 * Registers a new user with provided credentials.
	 *
	 * @param payload Object containing email, password1, and password2.
	 * @returns An Observable of the server’s registration response.
	 */
	register(payload: RegisterPayload): Observable<any> {
		return this.http.post(`${this.baseUrl}/registration/`, payload, {
			withCredentials: true,
		});
	}

	/**
	 * Logs in a user with email and password.
	 * On success, updates the login state to true.
	 *
	 * @param payload Object containing email and password.
	 * @returns An Observable of the server’s login response.
	 */
	login(payload: LoginPayload): Observable<any> {
		return this.http
			.post(`${this.baseUrl}/login/`, payload, {
				withCredentials: true,
			})
			.pipe(tap(() => this.loggedInSubject.next(true)));
	}

	/**
	 * Uses the HttpOnly refresh cookie to obtain a new access token.
	 * On success, maintains the login state.
	 *
	 * @returns An Observable of the server’s token refresh response.
	 */
	refreshToken(): Observable<any> {
		return this.http
			.post(
				`${this.baseUrl}/token/refresh/`,
				{},
				{ withCredentials: true }
			)
			.pipe(tap(() => this.loggedInSubject.next(true)));
	}

	/**
	 * Logs the user out by clearing the login state.
	 * Frontend should also trigger any necessary backend logout if needed.
	 */
	logout(): void {
		this.loggedInSubject.next(false);
	}
}
