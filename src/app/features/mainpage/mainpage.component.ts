import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

interface VideoSection {
	title: string;
	images: string[];
}

@Component({
	selector: "app-mainpage",
	imports: [CommonModule, HeaderComponent, FooterComponent],
	templateUrl: "./mainpage.component.html",
	styleUrl: "./mainpage.component.scss",
})
export class MainpageComponent {
	isMainPage = true;

	handleLogOut() {
		console.log("Logging out...");
	}

	videoSections: VideoSection[] = [
		{
			title: "New on Videoflix",
			images: ["/assets/img/frame1.1.png", "/assets/img/frame1.2.png", "/assets/img/frame1.3.png", "/assets/img/frame1.4.png", "/assets/img/frame1.5.png", "/assets/img/frame1.6.png"],
		},
		{
			title: "Documentary",
			images: ["/assets/img/frame1.2.png", "/assets/img/frame1.5.png", "/assets/img/frame1.4.png"],
		},
		{
			title: "Drama",
			images: ["/assets/img/frame1.7.png", "/assets/img/frame1.8.png", "/assets/img/frame1.9.png", "/assets/img/frame1.9.1.png"],
		},
		{
			title: "Romance",
			images: ["/assets/img/frame1.9.png", "/assets/img/frame1.9.1.png"],
		},
	];
}
