import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffRadioComponent } from './radio.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
@Component({
  template: `
    <input type="radio" daff-radio/>
  `
})
class RadioWrapperComponent {
  
}

describe('DaffRadioComponent', () => {
  let wrapper: RadioWrapperComponent;
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
    de = fixture.debugElement.query(By.css('input[daff-radio]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });
  describe('daff-radio', () => {
    it('should add a class of daff-button to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-radio': true,
      }));
    });
  })
});
