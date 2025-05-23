import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class XsrfInterceptor implements HttpInterceptor {
	constructor(private xsrfExtractor: HttpXsrfTokenExtractor) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// Angular liest standardmäßig XSRF-TOKEN → X-XSRF-TOKEN, wir brauchen csrftoken → X-CSRFToken
		const token = this.xsrfExtractor.getToken(); // holt 'csrftoken' aus dem Cookie :contentReference[oaicite:0]{index=0}
		if (token && !req.headers.has("X-CSRFToken")) {
			// Klonen und Header + withCredentials setzen
			const authReq = req.clone({
				headers: req.headers.set("X-CSRFToken", token),
				withCredentials: true,
			});
			return next.handle(authReq);
		}
		return next.handle(req);
	}
}
