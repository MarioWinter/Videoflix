import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-preview',
    imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
    templateUrl: './preview.component.html',
    styleUrl: './preview.component.scss',
})
export class PreviewComponent {
    isPreviewPage = true;
    activeImage!: string;

    constructor(private route: ActivatedRoute, private location: Location) {}

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.activeImage = params['img'];
        });
    }
    goBack() {
        this.location.back();
    }
}
