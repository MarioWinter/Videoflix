import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "app-register",
	imports: [ReactiveFormsModule],
	templateUrl: "./register.component.html",
	styleUrl: "./register.component.scss",
})
export class RegisterComponent {
	registerForm = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]),
		password1: new FormControl("", [Validators.required, Validators.minLength(8)]),
		password2: new FormControl("", [Validators.required, Validators.minLength(8)]),
	});

	onSubmit() {
		if (this.registerForm.valid) {
			// siehe Abschnitt 3
		}
	}
}
