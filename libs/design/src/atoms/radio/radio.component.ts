import { Component, OnInit, Input, ElementRef, Renderer2, HostBinding, ViewEncapsulation, ChangeDetectionStrategy, HostListener } from '@angular/core';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input[daff-radio]',
  templateUrl: './radio.html',
  styleUrls: ['./radio.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffRadioComponent implements OnInit {

  checked: boolean;
  disabled: boolean;
  id: string;
  name: string;
  value: string;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    if (this._getHostElement().hasAttribute('daff-radio')) {
      (elementRef.nativeElement as HTMLElement).classList.add('daff-radio');
    }
  }
  ngOnInit() {
    if (this._getHostElement().hasAttribute('daff-radio')) {
      (this.elementRef.nativeElement as HTMLElement).classList.add('daff-radio');
    }
  }

  @HostBinding('class.daff-radio') radio(){
    
  };

  @HostListener('click') onClick() {
    this.checked = true;
  };
  @HostListener('disable') onDisable() {
    this.disabled = true;
  };
  @HostListener('focus') onFocus() {

  };
  @HostListener('blur') onBlur() {

  };
  @HostListener('change') onChange() {

  };

  _getHostElement() {
    return this.elementRef.nativeElement;
  }
}
