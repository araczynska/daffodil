import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffRadioComponent } from './radio.component';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';



@NgModule({
  exports:[
    DaffRadioComponent,
    DaffRadioSetComponent
  ],
  declarations: [
    DaffRadioComponent,
    DaffRadioSetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DaffRadioModule { }
