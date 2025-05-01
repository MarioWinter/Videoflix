import { Component, Input, ChangeDetectionStrategy, Injector, OnInit, forwardRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";

/**
 * A reusable input component implementing ControlValueAccessor.
 * @remarks
 * - Integrates with Reactive Forms via NgControl fetched lazily.
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
export class InputComponent implements ControlValueAccessor, OnInit {
	@Input() type: string = "text";
	@Input() placeholder: string = "";
	@Input() isVisible: boolean = false;

	/** Internal value of the component */
	value: string = "";
	/** Underlying NgControl, fetched lazily to avoid DI cycle */
	private ngControl?: NgControl;

	/** Function called when the value changes */
	onChange: (value: any) => void = () => {};
	/** Function called when the input is touched */
	onTouched: () => void = () => {};

	constructor(private injector: Injector) {}

	ngOnInit(): void {
		const control = this.injector.get(NgControl, null);
		if (control) {
			control.valueAccessor = this;
			this.ngControl = control;
		}
	}

	/**
	 * Writes a value from the form model into the view.
	 * @param obj The new value from the FormControl
	 */
	writeValue(obj: any): void {
		this.value = obj ?? "";
	}

	/**
	 * Registers a callback to notify the form when the value changes.
	 * @param fn Callback to call on change
	 */
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	/**
	 * Registers a callback to notify the form when the control is touched.
	 * @param fn Callback to call on touch
	 */
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
	/**
	 * Optional method to handle disabled state changes.
	 * @param isDisabled True if the control should be disabled
	 */
	setDisabledState?(isDisabled: boolean): void {}

	/**
	 * Invoked on every user input event.
	 * @param value The new input value
	 */
	onInput(value: string): void {
		this.value = value;
		this.onChange(value);
	}

	/**
	 * Toggles the input `type` between "password" and "text".
	 * Called when the visibility icon is clicked.
	 */
	toggleVisibility(): void {
		this.type = this.type === "password" ? "text" : "password"; // :contentReference[oaicite:2]{index=2}
	}
}
