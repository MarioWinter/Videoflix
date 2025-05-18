import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-imprint',
    imports: [RouterModule],
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
    constructor(private location: Location) {}

    goBack() {
        this.location.back();
    }
}
