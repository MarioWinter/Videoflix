import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, switchMap, catchError } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private isRefreshing = false;

	constructor(private auth: AuthService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((error: HttpErrorResponse) => {
				if (error.status === 401 && !req.url.endsWith("/token/refresh/") && !this.isRefreshing) {
					this.isRefreshing = true;
					return this.auth.refreshToken().pipe(
						switchMap(() => {
							this.isRefreshing = false;
							// Ursprüngliche Anfrage wiederholen
							return next.handle(req.clone());
						}),
						catchError((err) => {
							this.isRefreshing = false;
							// Refresh fehlgeschlagen: weiterleiten oder Fehler durchreichen
							return throwError(() => err);
						})
					);
				}
				return throwError(() => error);
			})
		);
	}
}
