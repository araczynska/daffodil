import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DaffRadioModule } from './radio.module';
import { DaffRadioComponent } from './radio.component';


@Component({
  template: `
    <daff-radio name="test" value="testValue"></daff-radio>
  `
})
class RadioWrapperComponent { }

@Component({
  template: `
 
<daff-radio-set [formGroup]="radioGroup" name="fruit">
  <daff-radio formControlName="fruit" value="apple">Apple</daff-radio>
  <daff-radio formControlName="fruit" value="grape">Grape</daff-radio>
  <daff-radio formControlName="fruit" value="peach">Peach</daff-radio>
</daff-radio-set>
  `
})
class RadioEmbeddedComponent {
  radioGroup = new FormGroup({
    fruit: new FormControl()
  });
  disable() {
    this.radioGroup.disable();
  }
  setValue() {
    this.radioGroup.setValue({ fruit: 'pear' });
  }
}

describe('DaffRadioComponent', () => {
  let radioWrapper: RadioWrapperComponent;
  let radioEmbedded: RadioEmbeddedComponent;

  let component: DaffRadioComponent;
  let embeddedComponent: DaffRadioComponent;

  let fixture: ComponentFixture<RadioWrapperComponent>;
  let embeddedFixture: ComponentFixture<RadioEmbeddedComponent>;

  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RadioWrapperComponent,
        RadioEmbeddedComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffRadioModule
      ]
    })
      .compileComponents();
  }));

  describe('daff-radio', () => {

    describe('within a daff-radioset', () => {
      beforeEach(() => {
        embeddedFixture = TestBed.createComponent(RadioEmbeddedComponent);
        radioEmbedded = embeddedFixture.componentInstance;
        de = embeddedFixture.debugElement.query(By.css('daff-radio'));
        embeddedComponent = embeddedFixture.debugElement.query(By.css('daff-radio')).componentInstance;
        embeddedFixture.detectChanges();
      });
      it('should create', () => {
        expect(radioEmbedded).toBeTruthy();
      });
      it('should get its name from the parent daff-radioset', () => {
        expect(embeddedComponent.name).toEqual('fruit');
      });
      it('should take a value as an input', () => {
        expect(embeddedComponent.value).not.toBeUndefined();
      });
      it('should have a generated id', () => {
        expect(embeddedComponent.id).toMatch('daff-radio-[0-9]*')
      });
      describe('and the control value accessor implementation', () => {
        it('should let the value be set from a form control', () => {
          embeddedComponent.checked = true;
          radioEmbedded.setValue();
          expect(embeddedComponent.checked).toEqual(false);
        });
        it('should let the radio be disabled from a form control', () => {
          radioEmbedded.disable();
          expect(embeddedComponent.disabled).toEqual(true);
        });
      });
    });
    describe('without a daff-radioset', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(RadioWrapperComponent);
        radioWrapper = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('daff-radio'));
        component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
        fixture.detectChanges();
      });
      it('should take a name as an input', () => {
        expect(component.name).toEqual('test');
      });
      it('should create', () => {
        expect(radioWrapper).toBeTruthy();
      });
      it('should take a value as an input', () => {
        expect(component.value).toEqual('testValue');
      });
      it('should have a generated id', () => {
        expect(component.id).toMatch('daff-radio-[0-9]*')
      });
    });
  })
});
