import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export interface Video {
    id: number;
    genre: string;
    title: string;
    description: string;
    thumbnail: string;
    video_1080p: string;
    video_720p: string;
    video_360p: string;
    video_120p: string;
    uploaded_at: string;
}

@Injectable({ providedIn: 'root' })
export class VideoService {
    title = signal('');

    private http = inject(HttpClient);
    private apiUrl = '/api/media/videos/';

    getVideos(): Observable<Video[]> {
        return this.http.get<Video[]>(this.apiUrl);
    }

    getVideoById(id: number): Observable<Video> {
        return this.http.get<Video>(`${this.apiUrl}${id}/`);
    }
}
