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
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
	/** Button type attribute */
	@Input() type: "button" | "submit" = "button";
	/** Disabled state */
	@Input() disabled: boolean = false;
}
