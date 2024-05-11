import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDateComponent } from './control-date.component';

describe('ControlDateComponent', () => {
  let component: ControlDateComponent;
  let fixture: ComponentFixture<ControlDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlDateComponent]
    });
    fixture = TestBed.createComponent(ControlDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
