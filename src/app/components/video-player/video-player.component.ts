import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  @Input() src!: string;
  // @Input() poster?: string; // für die Vorschaubilder 
  isVisible = false; 

  showPlayer() {
    this.isVisible = true;
  }

  closePlayer() {
    this.isVisible = false;
  }
}
