import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';

interface VideoSection {
    title: string;
    images: string[];
}

@Component({
    selector: 'app-mainpage',
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
    templateUrl: './mainpage.component.html',
    styleUrl: './mainpage.component.scss',
})
export class MainpageComponent {
    isMainPage = true;

    encodeURIComponent(path: string): string {
        return encodeURIComponent(path);
    }

    videoSections: VideoSection[] = [
        {
            title: 'New on Videoflix',
            images: [
                '/assets/img/frame1.1.svg',
                '/assets/img/frame1.2.svg',
                '/assets/img/frame1.3.svg',
                '/assets/img/frame1.4.svg',
                '/assets/img/frame1.5.svg',
                '/assets/img/frame1.6.svg',
            ],
        },
        {
            title: 'Documentary',
            images: [
                '/assets/img/frame1.2.svg',
                '/assets/img/frame1.5.svg',
                '/assets/img/frame1.4.svg',
            ],
        },
        {
            title: 'Drama',
            images: [
                '/assets/img/frame1.7.svg',
                '/assets/img/frame1.8.svg',
                '/assets/img/frame1.9.svg',
                '/assets/img/frame1.9.1.svg',
            ],
        },
        {
            title: 'Romance',
            images: [
				'/assets/img/frame1.9.svg', 
				'/assets/img/frame1.9.1.svg'
			],
        },
    ];
}
