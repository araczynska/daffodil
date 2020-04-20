import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { DaffRadioModule } from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';
import { DaffRadiosetModule } from 'libs/design/src';



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
    DaffRadiosetModule,
    ReactiveFormsModule
  ]
})
export class RadioModule { }
