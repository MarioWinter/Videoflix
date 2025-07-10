import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { Video, VideoService } from '../../services/video.service';

interface VideoSection {
    title: string;
    images: string[];
}

@Component({
    selector: 'app-mainpage',
    imports: [CommonModule, RouterModule, LayoutModule],
    templateUrl: './mainpage.component.html',
    styleUrl: './mainpage.component.scss',
})
export class MainpageComponent implements OnInit {
    video = signal<Video | null>(null);

    videoUrl = '';

    constructor(
        private breakpointObserver: BreakpointObserver,
        private router: Router,
        private videoService: VideoService
    ) {}

    videoSections: VideoSection[] = [
        // {
        //     title: 'New on Videoflix',
        //     images: [
        //         '/assets/img/frame1.1.svg',
        //         '/assets/img/frame1.2.svg',
        //         '/assets/img/frame1.3.svg',
        //         '/assets/img/frame1.4.svg',
        //         '/assets/img/frame1.5.svg',
        //         '/assets/img/frame1.6.svg',
        //     ],
        // },
        // {
        //     title: 'Documentary',
        //     images: [
        //         '/assets/img/frame1.2.svg',
        //         '/assets/img/frame1.5.svg',
        //         '/assets/img/frame1.4.svg',
        //     ],
        // },
        // {
        //     title: 'Drama',
        //     images: [
        //         '/assets/img/frame1.7.svg',
        //         '/assets/img/frame1.8.svg',
        //         '/assets/img/frame1.9.svg',
        //         '/assets/img/frame1.9.1.svg',
        //     ],
        // },
        // {
        //     title: 'Romance',
        //     images: ['/assets/img/frame1.9.svg', '/assets/img/frame1.9.1.svg'],
        // },
    ];

    ngOnInit(): void {
        this.videoService.getVideos().subscribe((videos) => {
            if (videos.length === 0) return;

            const randomIndex = Math.floor(Math.random() * videos.length);
            const selected = videos[randomIndex];
            this.video.set(selected);
            this.videoUrl = selected.video_1080p;

            const grouped: { [genre: string]: string[] } = {};

            for (const video of videos) {
                if (!video.genre) continue;

                // Hauptvideo ganz vorne bei seinem Genre einsortieren
                if (video.id === selected.id) {
                    grouped[video.genre] = [
                        video.thumbnail,
                        ...(grouped[video.genre] || []),
                    ];
                } else {
                    grouped[video.genre] = [
                        ...(grouped[video.genre] || []),
                        video.thumbnail,
                    ];
                }
            }

            this.videoSections = Object.entries(grouped).map(
                ([genre, images]) => ({ title: genre, images })
            );
        });
    }

    buildVideoSections(videos: Video[]): void {
        const currentVideoId = 2;
        const grouped: { [genre: string]: string[] } = {};

        for (const video of videos) {
            if (video.id === currentVideoId) continue;
            if (!grouped[video.genre]) {
                grouped[video.genre] = [];
            }
            grouped[video.genre].push(video.thumbnail);
        }
        this.videoSections = Object.entries(grouped).map(([genre, images]) => ({
            title: genre,
            images,
        }));
    }

    encodeURIComponent(path: string): string {
        return encodeURIComponent(path);
    }

    playVideo() {
        const v = this.video();
        if (v) {
            this.router.navigate(['/video-player'], {
                queryParams: { id: v.id, url: v.video_1080p },
            });
        }
    }

    onImageClick(image: string): void {
        this.videoService.getVideos().subscribe((videos) => {
            const clickedVideo = videos.find((v) => v.thumbnail === image);
            if (!clickedVideo) return;

            this.breakpointObserver
                .observe(['(min-width: 960px)'])
                .subscribe(() => {
                    this.router.navigate(['/video-player'], {
                        queryParams: {
                            id: clickedVideo.id,
                            url: clickedVideo.video_1080p,
                        },
                    });
                });
        });
    }
}
