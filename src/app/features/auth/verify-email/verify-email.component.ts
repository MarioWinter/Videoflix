import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/**
 * @remarks
 * Displays a message prompting the user to verify their email after registration.
 */

@Component({
	selector: 'app-verify-email',
	imports: [CommonModule, RouterModule],
	templateUrl: './verify-email.component.html',
	styleUrl: './verify-email.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyEmailComponent {}
