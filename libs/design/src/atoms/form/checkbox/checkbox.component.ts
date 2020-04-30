import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let checkboxIdNum = 0;

@Component({
  selector: 'daff-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DaffCheckboxComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffCheckboxComponent implements ControlValueAccessor {
  @Input() value: any;
  @Input() checked: boolean = false;
  @Input() id: string = 'daff-checkbox-' + checkboxIdNum;
  focused: boolean;
  disabled: boolean;

  onChange: () => {};
  onTouched: () => {};

  writeValue(value: any): void {
    this.checked = (value == 'true' || value == 'checked' ? true : false)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  @HostBinding('attr.role') role = 'checkbox';
  @HostBinding('class.focused') get focusClass() {
    return this.focused === true;
  };
  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled === true;
  };
  onBlur() {
    this.focused = false;
  }
  onFocus() {
    this.focused = true;
  }

  constructor() {
    checkboxIdNum++;
  }
}