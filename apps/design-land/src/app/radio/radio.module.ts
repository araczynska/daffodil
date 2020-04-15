import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { DaffRadioModule } from '@daffodil/design';



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
    DaffRadioModule
  ]
})
export class RadioModule { }
