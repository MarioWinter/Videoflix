import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Location } from '@angular/common';

@Component({
    selector: 'app-video-player',
    imports: [HeaderComponent],
    templateUrl: './video-player.component.html',
    styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
    constructor(private location: Location) {}

    isVideoPlayer = true;

    goBack() {
        this.location.back();
    }

    showHeader = true;
    private hideTimeout: any;

    showControls() {
        this.showHeader = true;
        clearTimeout(this.hideTimeout);
        this.hideTimeout = setTimeout(() => {
            this.showHeader = false;
        }, 3000);
    }
}
