import { Component, OnInit, Input, Output, EventEmitter, forwardRef, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true,
    }]
})
export class SliderComponent implements OnInit, ControlValueAccessor {
  constructor() { }
  @Input('controlInput') controlInput;
  @Input('min') min;
  @Input('max') max;
  @Input('step') step;

  ngOnInit() {
  }

  ngOnChanges() {
  }

  private propagateChange = (_: any) => { };

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public writeValue(evt) {
    this.controlInput = evt;
  }

  public updateValue(evt) {
    this.propagateChange(this.controlInput);
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

}
