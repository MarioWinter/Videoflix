import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Displays a confirmation that a password reset email has been sent.
 */

@Component({
	selector: 'app-reset-password-sent-email',
	imports: [CommonModule, RouterModule],
	templateUrl: './reset-password-sent-email.component.html',
	styleUrl: './reset-password-sent-email.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordSentEmailComponent {}
