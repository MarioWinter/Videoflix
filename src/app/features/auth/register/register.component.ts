import { Component, ChangeDetectionStrategy, computed, signal, Signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { InputComponent } from "../../../shared/componets/input/input.component";
import { ButtonComponent } from "../../../shared/componets/button/button.component";

/**
 * Registration component for new users.
 * @remarks
 * - Uses Reactive Forms and Signals for password matching.
 * - Integrates reusable Input- and ButtonComponents.
 */
@Component({
	selector: "app-register",
	imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent],
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
	/** Reactive form group for registration */
	registerForm = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]),
		password1: new FormControl("", [Validators.required, Validators.minLength(8)]),
		password2: new FormControl("", [Validators.required, Validators.minLength(8)]),
	});

	/** Signal: true if passwords differ */
	readonly passwordsDoNotMatch: Signal<boolean> = computed(() => {
		const pw1 = this.registerForm.get("password1")?.value;
		const pw2 = this.registerForm.get("password2")?.value;
		return !!pw1 && !!pw2 && pw1 !== pw2;
	});

	/** Handle form submission */
	onSubmit(): void {
		if (this.registerForm.valid && !this.passwordsDoNotMatch()) {
			console.log("Benutzer registriert:", this.registerForm.value);
		}
	}
}
