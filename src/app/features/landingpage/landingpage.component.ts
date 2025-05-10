import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
	selector: "app-landingpage",
	imports: [HeaderComponent, FooterComponent, RouterModule],
	templateUrl: "./landingpage.component.html",
	styleUrl: "./landingpage.component.scss",
})
export class LandingpageComponent {
	isLandingPage = true;
}
