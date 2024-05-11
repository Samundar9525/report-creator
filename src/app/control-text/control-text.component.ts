import { Component, Input } from '@angular/core';

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
}
