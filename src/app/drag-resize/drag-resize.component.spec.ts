import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragResizeComponent } from './drag-resize.component';

describe('DragResizeComponent', () => {
  let component: DragResizeComponent;
  let fixture: ComponentFixture<DragResizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragResizeComponent]
    });
    fixture = TestBed.createComponent(DragResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
