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
import {
	AuthService,
	RegisterPayload,
} from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-login',
	imports: [
		CommonModule,
		ReactiveFormsModule,
		InputComponent,
		ButtonComponent,
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
	constructor(private auth: AuthService, private router: Router) {}

	loginForm = new FormGroup({
		email: new FormControl<string>('', {
			validators: [Validators.required, Validators.email],
			updateOn: 'blur',
		}),
		password: new FormControl<string>('', {
			validators: [Validators.required, Validators.minLength(8)],
			updateOn: 'blur',
		}),
	});
}
