import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() minValue = 0
  @Input() maxValue = 10
  @Input() value = 3
  @Input() controlName = 'Contol'
  @Output() SliderRange = new EventEmitter();


  valueChangeHandler(ev: any){
    // console.log(ev.value)
    this.SliderRange.emit(ev.value)
  }

}
