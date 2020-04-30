import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffCheckboxSetComponent } from './checkbox-set.component';
import { DaffCheckboxModule } from '../checkbox/checkbox.module';

@Component({
  template: `
 
<daff-checkbox-set [formGroup]="checkboxGroup" name="toppings">
  <daff-checkbox formControlName="lettuce" value="lettuce">Apple</daff-checkbox>
  <daff-checkbox formControlName="tomato" value="tomato">Grape</daff-checkbox>
  <daff-checkbox formControlName="pickle" value="pickle">Peach</daff-checkbox>
</daff-checkbox-set>
  `
})
class CheckboxEmbeddedComponent {
  checkboxGroup = new FormGroup({
    lettuce: new FormControl(),
    tomato: new FormControl(),
    pickle: new FormControl()
  });
}

describe('DaffCheckboxSetComponent', () => {

  let de: DebugElement;
  let checkboxEmbedded: CheckboxEmbeddedComponent;
  let embeddedComponent: DaffCheckboxSetComponent;
  let embeddedFixture: ComponentFixture<CheckboxEmbeddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxEmbeddedComponent
      ],
      imports: [
        ReactiveFormsModule,
        DaffCheckboxModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    embeddedFixture = TestBed.createComponent(CheckboxEmbeddedComponent);
    checkboxEmbedded = embeddedFixture.componentInstance;
    de = embeddedFixture.debugElement.query(By.css('daff-Checkbox-set'));
    embeddedComponent = embeddedFixture.debugElement.query(By.css('daff-Checkbox-set')).componentInstance;
    embeddedFixture.detectChanges();
  });

  it('should create', () => {
    expect(embeddedComponent).toBeTruthy();
  });
  it('should take a name as an input', () => {
    expect(embeddedComponent.name).toBe('toppings');
  });
});