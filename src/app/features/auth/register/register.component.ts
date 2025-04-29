import { Component, ChangeDetectionStrategy, computed, signal, Signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormControlName } from "@angular/forms";
import { InputComponent } from "../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { passwordMatchValidator } from "../../../shared/utils/custom.validator";

/**
 * Registration component for new users.
 * @remarks
 * - Uses Reactive Forms and Signals for password matching.
 * - Integrates reusable Input- and ButtonComponents.
 */
@Component({
	selector: "app-register",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent],
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
	/**
	 * Main FormGroup for the registration form.
	 * @remarks
	 * Contains fields for email, password1, password2 and applies blur-update strategy.
	 */
	registerForm = new FormGroup(
		{
			email: new FormControl("", {
				validators: [Validators.required, Validators.email],
				updateOn: "blur",
			}),
			password1: new FormControl("", {
				validators: [Validators.required, Validators.minLength(8)],
				updateOn: "blur",
			}),
			password2: new FormControl("", {
				validators: [Validators.required, Validators.minLength(8)],
				updateOn: "blur",
			}),
		},
		{
			validators: passwordMatchValidator,
			updateOn: "blur",
		}
	);

	/**
	 * Indicates whether the two password fields do not match.
	 * @returns True if password2 has been touched, has a value, and does not match password1.
	 */
	get showPasswordMismatch(): boolean {
		const control = this.registerForm.get("password2");
		return !!(control && control.value && control.touched && this.registerForm.hasError("passwordMismatch"));
	}

	/**
	 * Checks if a given control is invalid after user interaction.
	 * @param controlName Name of the FormControl in the FormGroup.
	 * @returns True if the control is invalid and has been touched.
	 */
	showError(controlName: string): boolean {
		const control = this.registerForm.get(controlName);
		return !!(control && control.invalid && control.touched);
	}

	/**
	 * Produces the appropriate error message for a specific control.
	 * @param controlName Name of the FormControl in the FormGroup.
	 * @returns A user-friendly validation message or null if no errors.
	 */
	errorMessage(controlName: string): string | null {
		const control = this.registerForm.get(controlName);
		if (!control || !control.errors) return null;
		const errs = control.errors;

		if (errs["email"]) {
			return "Invalid email";
		}
		if (errs["minlength"]) {
			const len = errs["minlength"].requiredLength;
			return `Password must be at least ${len} characters long`;
		}
		return null;
	}

	/**
	 * Handles form submission when all validations pass.
	 * @remarks
	 * Logs the form value to the console; replace with real registration logic.
	 */
	onSubmit(): void {
		if (this.registerForm.valid) {
			console.log("Benutzer registriert:", this.registerForm.value);
		}
	}
}
