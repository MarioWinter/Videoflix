import { Component, forwardRef, Input, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * A reusable input component implementing ControlValueAccessor.
 * @remarks
 * - Encapsulates label, placeholder and validation display.
 * - Fits into Reactive Forms via formControlName.
 */
@Component({
	selector: "app-input",
	standalone: true,
	imports: [CommonModule],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputComponent),
			multi: true,
		},
	],
	templateUrl: "./input.component.html",
	styleUrls: ["./input.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
	/** The HTML input type (e.g., email, password) */
	@Input() type: string = "text";
	/** Placeholder text inside the input */
	@Input() placeholder: string = "";
	/** Optional label above the input */
	@Input() label?: string;

	/** Current value of the input */
	value: string = "";
	/** Validation error message, if any */
	error?: string;

	// Functions provided by Angular to propagate changes/touches:
	private onChange: (value: string) => void = () => {};
	onTouched: () => void = () => {};

	/** Write a new value from the form model into the view */
	writeValue(obj: any): void {
		this.value = obj ?? "";
	}

	/** Register a callback function that should be called on value change */
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	/** Register a callback function that should be called on blur */
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	/** Optional: handle disabled state */
	setDisabledState?(isDisabled: boolean): void {
		// Hier könnte man einen CSS-Klasse setzen
	}

	/** Update the value and notify the form */
	onInput(value: string): void {
		this.value = value; // Wert im Component-State aktualisieren
		this.onChange(value); // In FormModel schreiben
	}
}
