import { Component, Input } from '@angular/core';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-control-text',
  templateUrl: './control-text.component.html',
  styleUrls: ['./control-text.component.scss']
})
export class ControlTextComponent {
  @Input() fontColor:any;
  @Input() borderColor:any;
  @Input() backgroundColor:any;
  @Input() fontSize:any;
  @Input() text:any;

  constructor(private reportService: ReportService){
  }

  changeText(ev:any){
    setTimeout((r:any)=>{
      this.reportService.inputText.next(ev)
    },100)
  }
}
