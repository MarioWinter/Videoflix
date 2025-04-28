import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * A reusable button component.
 * @remarks
 * - Standardised styling for buttons.
 * - Supports disabled state and content projection.
 */
@Component({
	selector: "app-button",
	imports: [CommonModule],
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
	@Input() type: "button" | "submit" = "button";
	@Input() disabled: boolean = false;
}
