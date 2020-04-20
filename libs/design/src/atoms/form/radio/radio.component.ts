import { Component, OnInit, Input, ElementRef, Renderer2, HostBinding, ViewEncapsulation, ChangeDetectionStrategy, HostListener, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let daffRadioCount = 0;
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'daff-radio',
  templateUrl: './radio.html',
  styleUrls: ['./radio.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DaffRadioComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffRadioComponent implements ControlValueAccessor {

  @Input() checked: boolean = false;
  @Input() value: any;
  @Input() id: string = 'daff-radio-' + daffRadioCount;
  disabled: boolean = false;
  focused: boolean = false;

  name: string = 'nolan';

  constructor() {
    daffRadioCount++;
  }

  onChange: () => {};
  onTouched: () => {};

  onInputFocus() {
    this.focused = true;
  }
  onInputBlur() {
    this.focused = false;
  }
  writeValue(value: any): void {
    this.checked = value === this.value ? true : false;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
  @HostBinding('attr.role') role = 'radio';
  @HostBinding('class.focused') get focusClass() {
    return this.focused == true;
  };
  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled == true;
  };

}
