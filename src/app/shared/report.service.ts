import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  selectedControl = new Subject();
  inputText = new Subject()
  constructor() { }
}
