import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { effect } from '@angular/core';
import { VideoService } from '../../../services/video.service';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    currentRoute = '';
    videoTitle = '';

    constructor(private router: Router, private videoService: VideoService) {
        this.router.events.subscribe(() => {
            this.currentRoute = this.router.url.split('?')[0];
            if (this.currentRoute !== '/video-player') {
                this.videoService.title.set('');
            }
        });
        effect(() => {
            const title = this.videoService.title();
            setTimeout(() => {
                this.videoTitle = title;
            });
        });
    }

    goBack() {
        window.history.back();
    }
}
