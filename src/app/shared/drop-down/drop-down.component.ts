import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {
  @Input() name:any;
  @Output() selectedColorOption = new EventEmitter();
  myControl = new FormControl('');
  options: any[] = [
    { name: 'Red', code: '#ff0000' },
    { name: 'Green', code: '#00ff00' },
    { name: 'Blue', code: '#0000ff' }
  ];
  filteredOptions!: Observable<string[]>;
  selectedColor: any;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  displayFn(color: any): string {
    return color ? color.name : '';
  }

  onColorSelection(color: any): void {
    this.selectedColor = color;
    this.selectedColorOption.emit(this.selectedColor)
  }
}
