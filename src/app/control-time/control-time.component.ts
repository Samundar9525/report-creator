import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-time',
  templateUrl: './control-time.component.html',
  styleUrls: ['./control-time.component.scss']
})
export class ControlTimeComponent implements OnInit {
  public currentTime = new Date();
  @Input() time: any;
  @Input() fontColor:any;
  @Input() borderColor:any;
  @Input() backgroundColor:any;
  @Input() fontSize:any;
  @Input() text:any;

  constructor(private datePipe: DatePipe){

  }

  ngOnInit(){
    this.time =  this.datePipe.transform(this.currentTime,'hh-mm-ss');
  }
}
