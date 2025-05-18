import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-privacy-policy',
	imports: [RouterModule],
	templateUrl: './privacy-policy.component.html',
	styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
	constructor(private location: Location) {}

	goBack() {
		this.location.back();
	}
}
