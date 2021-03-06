import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "app-coefficient-btn",
	templateUrl: "./coefficient-btn.component.html",
	styleUrls: ["./coefficient-btn.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CoefficientBtnComponent,
			multi: true,
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoefficientBtnComponent implements OnInit, ControlValueAccessor {

	public onChange!: (value: number) => void;
	public onTouched!: () => void;
	public value: number | null = null;

	public constructor(
		private cdr: ChangeDetectorRef
	) { }

	public ngOnInit(): void {
	}

	public writeValue(obj: any): void {
		this.value = obj;
		this.cdr.detectChanges();
	}

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	public setValue(val: number) {
		this.value = val;
		this.onChange(val);
	}

}
