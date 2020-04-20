import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'design-land-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  radioGroup = new FormGroup({
    race: new FormControl('Terran')
  });

  constructor() { }

  ngOnInit() {
    
  }

}