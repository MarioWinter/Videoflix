import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';

@Component({
    selector: 'app-video-player',
    imports: [],
    templateUrl: './video-player.component.html',
    styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
    videoUrl = '';

    constructor(
        private location: Location,
        private renderer: Renderer2,
        private el: ElementRef,
        private route: ActivatedRoute,
        private videoService: VideoService
    ) {
        this.route.queryParams.subscribe((params) => {
            this.videoUrl = params['url'] || '';

            const videoId = params['id'];
            if (videoId) {
                this.videoService.getVideoById(+videoId).subscribe((video) => {
                    this.videoService.title.set(video.title);
                });
            }
        });
    }

    goBack() {
        this.location.back();
    }

    toggleHeader(hide: boolean) {
        let header = document.querySelector('app-header .header');
        if (header) {
            hide
                ? this.renderer.addClass(header, 'hide')
                : this.renderer.removeClass(header, 'hide');
        }
    }

    hideHeader() {
        setTimeout(() => {
            this.toggleHeader(true);
        }, 2500);
    }

    showHeader() {
        setTimeout(() => {
            this.toggleHeader(false);
        }, 500);
    }
}
