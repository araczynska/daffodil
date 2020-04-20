import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffRadiosetComponent } from './radioset.component';

describe('DaffRadiosetComponent', () => {
  let component: DaffRadiosetComponent;
  let fixture: ComponentFixture<DaffRadiosetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffRadiosetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffRadiosetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
