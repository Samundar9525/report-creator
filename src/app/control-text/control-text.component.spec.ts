import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTextComponent } from './control-text.component';

describe('ControlTextComponent', () => {
  let component: ControlTextComponent;
  let fixture: ComponentFixture<ControlTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlTextComponent]
    });
    fixture = TestBed.createComponent(ControlTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
