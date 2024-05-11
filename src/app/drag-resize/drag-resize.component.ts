import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-resize',
  templateUrl: './drag-resize.component.html',
  styleUrls: ['./drag-resize.component.scss']
})
export class DragResizeComponent {



  @Input() controlName!: string
  @Input() containment!: HTMLElement;

  inBounds = true;
  myOutOfBounds = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  };
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true,
  };

  onResize(ev:any){

  }

  checkEdge(ev: any){
    console.log(ev)
    this.edge = ev;
    console.log(this.edge)
  }
}
