import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	ReactiveFormsModule,
	FormGroup,
	FormControl,
	Validators,
} from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService, ResetPayload } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
	selector: 'app-forgot-password',
	imports: [
		CommonModule,
		ReactiveFormsModule,
		InputComponent,
		ButtonComponent,
		RouterLink,
	],
	templateUrl: './forgot-password.component.html',
	styleUrl: './forgot-password.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent {
	constructor(private auth: AuthService, private router: Router) {}

	forgotpasswordForm = new FormGroup({
		email: new FormControl<string>('', {
			validators: [Validators.required, Validators.email],
			updateOn: 'blur',
		}),
	});

	serverError: string | null = null;

	/**
	 * Checks if a given control is invalid after user interaction.
	 * @param controlName Name of the FormControl in the FormGroup.
	 * @returns True if the control is invalid and has been touched.
	 */
	showError(controlName: string): boolean {
		const control = this.forgotpasswordForm.get(controlName);
		return !!(control && control.invalid && control.touched);
	}

	/**
	 * Produces the appropriate error message for a specific control.
	 * @param controlName Name of the FormControl in the FormGroup.
	 * @returns A user-friendly validation message or null if no errors.
	 */
	errorMessage(controlName: string): string | null {
		const control = this.forgotpasswordForm.get(controlName);
		if (!control || !control.errors) return null;
		const errs = control.errors;

		if (errs['email']) {
			return 'Invalid email';
		}
		return null;
	}

	onSubmit(): void {
		this.serverError = null;
		if (this.forgotpasswordForm.valid) {
			const payload = this.forgotpasswordForm.value as ResetPayload;
			this.auth.forgotPassword(payload).subscribe({
				next: () => this.router.navigate(['/password-reset-sent']),
				error: (err) => {
					this.serverError = err.error?.detail || 'Reset failed';
				},
			});
		}
	}
}
