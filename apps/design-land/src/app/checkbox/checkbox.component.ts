import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'checkbox-component',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],

})
export class CheckboxComponent {

  checkboxes = new FormGroup({
    option1: new FormControl('false'),
    option2: new FormControl('true'),
    option3: new FormControl()
  })
}