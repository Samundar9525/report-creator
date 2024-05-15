import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-drag-resize',
  templateUrl: './drag-resize.component.html',
  styleUrls: ['./drag-resize.component.scss']
})
export class DragResizeComponent {

  constructor(private reportService: ReportService){
  }

  @Input() id:any;
  @Input() controlName!: string
  @Input() containment!: HTMLElement;
  @Input() fontColor:any;
  @Input() borderColor:any;
  @Input() backgroundColor:any;
  @Input() fontSize:any;
  @Input() text:any;
  @Input() height = 50;
  @Input() width = 200;


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
    this.height = ev.size.height;
    this.width = ev.size.width;
  }

  checkEdge(ev: any){
    console.log(ev)
    this.edge = ev;
    console.log(this.edge)
  }

  controlSelected(ev:any){
    this.reportService.selectedControl.next(ev);
  }
}
