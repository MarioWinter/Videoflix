import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface RegisterPayload {
	email: string;
	password1: string;
	password2: string;
}

/**
 * AuthService handles registration, login, refresh and user-details retrieval.
 */
@Injectable({ providedIn: "root" })
export class AuthService {
	private readonly baseUrl = "/api/auth";

	constructor(private http: HttpClient) {}

	/**
	 * Holt den CSRF-Token durch einen GET-Request (setzt csrftoken-Cookie).
	 */
	getCsrfToken(): Observable<any> {
		return this.http.get(`${this.baseUrl}/csrf/`, {
			withCredentials: true, // sendet Cookies und empfängt csrftoken :contentReference[oaicite:5]{index=5}
		});
	}

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

	/**
	 * Refreshes the access token using the HttpOnly refresh cookie.
	 *
	 * @remarks
	 * This method sends a POST request to the backend endpoint responsible for issuing
	 * a new access token. The refresh token is automatically sent via an HttpOnly cookie.
	 *
	 * @returns An observable containing the new access token or an error if the cookie is missing or expired.
	 */
	refreshToken(): Observable<any> {
		return this.http.post(
			`${this.baseUrl}/token/refresh/`,
			{}, // kein Body nötig, das Cookie wird automatisch mitgesendet
			{ withCredentials: true }
		);
	}

	/**
	 * Retrieves the authenticated user's details.
	 *
	 * @remarks
	 * This request only succeeds if a valid access token is present in the cookies.
	 * Used to fetch user profile or session-related data after authentication.
	 *
	 * @returns An observable containing the user's details, such as ID, email, etc.
	 */
	getUserDetails(): Observable<any> {
		return this.http.get(`${this.baseUrl}/user/`, { withCredentials: true });
	}
}
