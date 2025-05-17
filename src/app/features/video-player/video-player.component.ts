import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-video-player',
    imports: [],
    templateUrl: './video-player.component.html',
    styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
    constructor(private location: Location) {}

    goBack() {
        this.location.back();
    }
}
