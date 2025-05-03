import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
	selector: "app-landingpage",
	imports: [HeaderComponent, FooterComponent],
	templateUrl: "./landingpage.component.html",
	styleUrl: "./landingpage.component.scss",
})
export class LandingpageComponent {
	handleLogin() {
		console.log("Logging in...");
	}
}
