import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    currentRoute = '';

    allowedFooterRoutes = [
        '/',
        '/login',
        '/register',
        '/verify-email',
        '/forgot-password',
        '/reset-password',
        '/mainpage',
        '/privacy-policy',
        '/imprint',
    ];

    showFooter(): boolean {
        return this.allowedFooterRoutes.includes(this.currentRoute);
    }

    constructor(private router: Router) {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.currentRoute = event.urlAfterRedirects.split('?')[0];
            });
    }
}
