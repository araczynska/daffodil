import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffRadioSetComponent } from './radioset.component';

describe('DaffRadioSetComponent', () => {
  let component: DaffRadioSetComponent;
  let fixture: ComponentFixture<DaffRadioSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffRadioSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffRadioSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
