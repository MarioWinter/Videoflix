import { Component, ChangeDetectionStrategy, computed, signal, Signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "app-register",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
	// Reactive FormGroup für die Registrierung
	registerForm = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]),
		password1: new FormControl("", [Validators.required, Validators.minLength(8)]),
		password2: new FormControl("", [Validators.required, Validators.minLength(8)]),
	});

	// Signal-basierte Auswertung, ob die Passwörter nicht übereinstimmen
	readonly passwordsDoNotMatch: Signal<boolean> = computed(() => {
		const pw1 = this.registerForm.get("password1")?.value;
		const pw2 = this.registerForm.get("password2")?.value;
		return !!pw1 && !!pw2 && pw1 !== pw2;
	});

	/**
	 * Formular-Abschicken
	 */
	onSubmit(): void {
		if (this.registerForm.valid && !this.passwordsDoNotMatch()) {
			console.log("Registriere Benutzer:", this.registerForm.value);
			// Hier könntest du den Registrierungs-Call an deinen Backend-Service hinzufügen
		}
	}
}
