import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * Validator to check if two FormControls in a FormGroup match.
 */
export const passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
	const pw1 = group.get("password1")?.value;
	const pw2 = group.get("password2")?.value;
	return pw1 !== pw2 ? { passwordMismatch: true } : null;
};
