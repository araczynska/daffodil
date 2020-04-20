import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffRadioComponent } from './radio.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
@Component({
  template: `
    <daff-radio [checked]=true value="testValue"></daff-radio>
  `
})
class RadioWrapperComponent {}

describe('DaffRadioComponent', () => {
  let wrapper: RadioWrapperComponent;
  let component: DaffRadioComponent;
  let fixture: ComponentFixture<RadioWrapperComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffRadioComponent,
        RadioWrapperComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioWrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-radio'));
    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });
  describe('daff-radio', () => {
    it('should add a class of focused to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'focused': false,
      }));
    });
    it('should add a class of disabled to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'disabled': false,
      }));
    });
    describe('when given inputs', () => {
      it('should be able to take in the boolean "checked" as an input', () => {
        expect(component.checked).toEqual(true);
      });
      it('should be able to take in a value as an input', () => {
        expect(component.value).toEqual("testValue");
      });
      it('should generate a unique id', () => {
        expect(component.id).toContain('daff-radio-');
      })
    })
  })
});
