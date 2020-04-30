import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DaffCheckboxModule } from './checkbox.module';
import { DaffCheckboxComponent } from './checkbox.component';



@Component({
  template: `
    <daff-checkbox value="testValue"></daff-checkbox>
  `
})
class CheckboxWrapperComponent { }

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
  setValue() {
    this.checkboxGroup.setValue({ lettuce: 'false', tomato: 'false', pickle: 'false' })
  }
  disable() {
    this.checkboxGroup.disable();
  }
}

describe('DaffCheckboxComponent', () => {
  let checkboxWrapper: CheckboxWrapperComponent;
  let checkboxEmbedded: CheckboxEmbeddedComponent;

  let component: DaffCheckboxComponent;
  let embeddedComponent: DaffCheckboxComponent;

  let fixture: ComponentFixture<CheckboxWrapperComponent>;
  let embeddedFixture: ComponentFixture<CheckboxEmbeddedComponent>;

  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxWrapperComponent,
        CheckboxEmbeddedComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffCheckboxModule
      ]
    })
      .compileComponents();
  }));

  describe('daff-checkbox', () => {

    describe('within a daff-checkbox-set', () => {
      beforeEach(() => {
        embeddedFixture = TestBed.createComponent(CheckboxEmbeddedComponent);
        checkboxEmbedded = embeddedFixture.componentInstance;
        de = embeddedFixture.debugElement.query(By.css('daff-checkbox'));
        embeddedComponent = embeddedFixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
        embeddedFixture.detectChanges();
      });
      it('should create', () => {
        expect(checkboxEmbedded).toBeTruthy();
      });
      it('should take a value as an input', () => {
        expect(embeddedComponent.value).not.toBeUndefined();
      });
      it('should have a generated id', () => {
        expect(embeddedComponent.id).toMatch('daff-checkbox-[0-9]*')
      });
      describe('and the control value accessor implementation', () => {
        it('should let the value be set from a form control', () => {
          embeddedComponent.checked = true;
          checkboxEmbedded.setValue();
          expect(embeddedComponent.checked).toEqual(false);
        });
        it('should let the checkbox be disabled from a form control', () => {
          checkboxEmbedded.disable();
          expect(embeddedComponent.disabled).toEqual(true);
        });
      });
    });
    describe('without a daff-checkbox-set', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxWrapperComponent);
        checkboxWrapper = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('daff-checkbox'));
        component = fixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
        fixture.detectChanges();
      });
      it('should create', () => {
        expect(checkboxWrapper).toBeTruthy();
      });
      it('should take a value as an input', () => {
        expect(component.value).toEqual('testValue');
      });
      it('should have a generated id', () => {
        expect(component.id).toMatch('daff-checkbox-[0-9]*')
      });
    });
  })
});