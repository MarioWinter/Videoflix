import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../shared/components/button/button.component"; 

@Component({
	selector: "app-landingpage",
	imports: [RouterModule, ButtonComponent],
	templateUrl: "./landingpage.component.html",
	styleUrl: "./landingpage.component.scss",
})
export class LandingpageComponent {

}
