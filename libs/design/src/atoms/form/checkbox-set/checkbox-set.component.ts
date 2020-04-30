import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'daff-checkbox-set',
  templateUrl: './checkbox-set.component.html',
  styleUrls: ['./checkbox-set.component.scss']
})
export class DaffCheckboxSetComponent {

  @Input() name: string;

  @HostBinding('attr.role') role = 'group';
}