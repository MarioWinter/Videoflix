import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    currentRoute = '';

    constructor(private router: Router) {
        this.router.events.subscribe(() => {
            this.currentRoute = this.router.url.split('?')[0];
        });
    }
}
