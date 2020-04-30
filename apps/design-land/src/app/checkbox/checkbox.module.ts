
import { NgModule } from '@angular/core';


import { CheckboxComponent } from './checkbox.component';
import { DaffCheckboxModule } from '@daffodil/design';
import { DesignLandCheckboxRoutingModule } from './checkbox-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    
 declarations: [
    CheckboxComponent,],
    imports: [
        DaffCheckboxModule,
        DesignLandCheckboxRoutingModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class CheckboxModule { }