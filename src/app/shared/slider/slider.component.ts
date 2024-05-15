import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() minValue = 14
  @Input() maxValue = 40
  @Input() value = 16
  @Input() controlName = 'Contol'
  @Output() SliderRange = new EventEmitter();


  valueChangeHandler(ev: any){
    this.SliderRange.emit(ev.value)
  }

}
