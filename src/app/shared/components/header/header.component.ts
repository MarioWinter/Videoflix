import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-header',
	imports: [CommonModule, RouterLink],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	currentRoute = '';

	constructor(private router: Router) {
		this.router.events.subscribe(() => {
			this.currentRoute = this.router.url.split('?')[0];
		});
	}

	goBack() {
		window.history.back();
	}
}
