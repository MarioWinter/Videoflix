// core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface RegisterPayload {
	email: string;
	password: string;
	re_password: string;
}

export interface LoginPayload {
	email: string;
	password: string;
}

export interface ResetPayload {
	email: string;
}

export interface PasswordResetConfirmPayload {
	uid: string;
	token: string;
	new_password: string;
	re_new_password: string;
}

export interface SetPasswordPayload {
	current_password: string;
	new_password: string;
	re_new_password: string;
}

/**
 * Service responsible for all authentication-related HTTP calls
 * and for maintaining the client’s login state.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
	private readonly djoserBase = '/auth/users';
	private readonly jwtBase = '/api/auth/jwt';

	/** Tracks whether the user is currently logged in. */
	private loggedInSubject = new BehaviorSubject<boolean>(false);
	/** Observable stream of the user’s login state for guards and components. */
	public isLoggedIn$ = this.loggedInSubject.asObservable();

	constructor(private http: HttpClient) {
		const hasToken = document.cookie.includes('access_token=');
		this.loggedInSubject.next(hasToken);
	}

	/**
	 * Registers a new user.
	 *
	 * @param payload Object containing email, password, and re_password.
	 * @returns An Observable of the server’s registration response.
	 */
	register(payload: RegisterPayload): Observable<any> {
		return this.http.post(`${this.djoserBase}/`, payload, {
			withCredentials: true,
		});
	}

	/**
	 * Logs in a user by obtaining JWT cookies.
	 * On success, updates the login state to true.
	 *
	 * @param payload Object containing email and password.
	 * @returns An Observable of the server’s login response.
	 */
	login(payload: LoginPayload): Observable<any> {
		return this.http
			.post(`${this.jwtBase}/create/`, payload, {
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
			.post(`${this.jwtBase}/refresh/`, {}, { withCredentials: true })
			.pipe(tap(() => this.loggedInSubject.next(true)));
	}

	/**
	 * Logs the user out by clearing cookies on the server
	 * and resetting the client’s login state.
	 */
	logout(): Observable<any> {
		return this.http
			.post(`${this.jwtBase}/logout/`, {}, { withCredentials: true })
			.pipe(tap(() => this.loggedInSubject.next(false)));
	}

	/**
	 * Initiates password-reset flow by sending the user's email.
	 *
	 * @param payload Object containing the user's email.
	 * @returns An Observable of the server’s reset-password initiation response.
	 */
	forgotPassword(payload: ResetPayload): Observable<any> {
		return this.http.post(`${this.djoserBase}/reset_password/`, payload, {
			withCredentials: true,
		});
	}

	/**
	 * Confirms password reset with UID and token.
	 *
	 * @param payload Object containing uid, token, and new passwords.
	 * @returns An Observable of the server’s reset-password confirmation response.
	 */
	confirmPasswordReset(
		payload: PasswordResetConfirmPayload
	): Observable<any> {
		return this.http.post(
			`${this.djoserBase}/reset_password_confirm/`,
			payload,
			{ withCredentials: true }
		);
	}

	/**
	 * Changes the currently authenticated user's password.
	 *
	 * @param payload Object containing current and new passwords.
	 * @returns An Observable of the server’s set-password response.
	 */
	setPassword(payload: SetPasswordPayload): Observable<any> {
		return this.http.post(`${this.djoserBase}/set_password/`, payload, {
			withCredentials: true,
		});
	}
}
