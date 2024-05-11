import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlImageComponent } from './control-image.component';

describe('ControlImageComponent', () => {
  let component: ControlImageComponent;
  let fixture: ComponentFixture<ControlImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlImageComponent]
    });
    fixture = TestBed.createComponent(ControlImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
