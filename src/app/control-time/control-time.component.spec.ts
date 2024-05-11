import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTimeComponent } from './control-time.component';

describe('ControlTimeComponent', () => {
  let component: ControlTimeComponent;
  let fixture: ComponentFixture<ControlTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlTimeComponent]
    });
    fixture = TestBed.createComponent(ControlTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
