import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { DaffRadioModule, DaffRadioSetModule } from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  exports:[
    RadioComponent,
    DesignLandRadioRoutingModule
  ],
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    DaffRadioModule,
    DaffRadioSetModule,
    ReactiveFormsModule
  ]
})
export class RadioModule { }
