import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface RegisterPayload {
	email: string;
	password1: string;
	password2: string;
}

/**
 * @injectable
 * @remarks
 * Handles registration and login via DJ-Rest-Auth with JWT in HttpOnly cookies.
 */
@Injectable({ providedIn: "root" })
export class AuthService {
	private readonly baseUrl = "/api/auth";

	constructor(private http: HttpClient) {}

	/**
	 * Register a new user.
	 * @param payload User credentials.
	 * @returns Observable of server response.
	 */
	register(payload: RegisterPayload): Observable<any> {
		return this.http.post(`${this.baseUrl}/registration/`, payload, {
			withCredentials: true,
		});
	}

	/**
	 * Login and set JWT cookies.
	 * @param email User E-Mail.
	 * @param password User password.
	 * @returns Observable of server response.
	 */
	login(email: string, password: string): Observable<any> {
		return this.http.post(
			`${this.baseUrl}/login/`,
			{ email, password },
			{
				withCredentials: true,
			}
		);
	}
}
