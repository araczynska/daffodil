import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffRadioComponent } from './radio.component';



@NgModule({
  exports:[
    DaffRadioComponent
  ],
  declarations: [
    DaffRadioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DaffRadioModule { }
