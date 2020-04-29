import { Component, OnInit, Input, ElementRef, Renderer2, HostBinding, ViewEncapsulation, ChangeDetectionStrategy, HostListener, forwardRef, ViewChild, Optional } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';

let radioUniqueId = 0;
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

export class DaffRadioComponent implements ControlValueAccessor, OnInit {
  onChange: () => {};
  onTouched: () => {};

  @HostBinding('attr.role') role = 'radio';
  @HostBinding('class.focused') get focusClass() {
    return this.focused === true;
  };
  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled === true;
  };

  @Input() checked = false;
  @Input() value: any;
  @Input() id: string = 'daff-radio-' + radioUniqueId;
  @Input() name: string;
  disabled = false;
  focused = false;

  constructor(@Optional() private radioset: DaffRadioSetComponent) {
    radioUniqueId++;
  }
  ngOnInit() {
    this.name = this.radioset ? this.radioset.name : this.name
  }

  onFocus() {
    this.focused = true;
  }
  onBlur() {
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

}
