import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, Validator, ControlValueAccessor } from '@angular/forms';



@Component({
  selector: 'app-coefficient-btn',
  templateUrl: './coefficient-btn.component.html',
  styleUrls: ['./coefficient-btn.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CoefficientBtnComponent,
      multi: true,
    }
  ]
})




export class CoefficientBtnComponent implements OnInit, ControlValueAccessor {

  public onChange!: (value: number) => void;
  public onTouched!: () => void;
  public value: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setValue(val: number) {
    this.value = val;
    this.onChange(val);
  }

}
