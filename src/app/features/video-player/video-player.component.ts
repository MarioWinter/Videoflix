import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'app-video-player',
    imports: [],
    templateUrl: './video-player.component.html',
    styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
    constructor(
        private location: Location,
        private renderer: Renderer2,
        private el: ElementRef
    ) {}

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
