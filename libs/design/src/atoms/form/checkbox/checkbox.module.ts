import { NgModule } from '@angular/core';


import { DaffCheckboxComponent } from './checkbox.component';
import { DaffCheckboxSetComponent } from '../checkbox-set/checkbox-set.component';

@NgModule({
    exports: [
        DaffCheckboxComponent,
        DaffCheckboxSetComponent
    ],
    declarations: [
        DaffCheckboxComponent,
        DaffCheckboxSetComponent
    ],
    imports: [],
    providers: []
})
export class DaffCheckboxModule { }