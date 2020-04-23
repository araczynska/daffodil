import { Component, OnInit, HostBinding, ElementRef, ViewChild, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'daff-radio-set',
  templateUrl: './radioset.component.html',
  styleUrls: ['./radioset.component.scss']
})
export class DaffRadioSetComponent {

  @Input() name: string;

  constructor() { }

  @HostBinding('attr.role') role = 'radiogroup';

}
