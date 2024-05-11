import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-date',
  templateUrl: './control-date.component.html',
  styleUrls: ['./control-date.component.scss']
})
export class ControlDateComponent implements OnInit {

  public cutrrentDate = new Date();
  @Input() date:any;
  @Input() fontColor:any;
  @Input() borderColor:any;
  @Input() backgroundColor:any;
  @Input() fontSize:any;
  @Input() text:any;
  constructor(private datePipe: DatePipe){

  }

  ngOnInit(){
    this.date =  this.datePipe.transform(this.cutrrentDate,'dd-MM-yyyy');
  }
}
