import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-line',
  templateUrl: './control-line.component.html',
  styleUrls: ['./control-line.component.scss']
})
export class ControlLineComponent {

  @Input() fontColor:any;
  @Input() borderColor:any;
  @Input() backgroundColor:any;

}
