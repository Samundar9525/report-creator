import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DragResizeComponent } from '../drag-resize/drag-resize.component';

@Component({
  selector: 'app-report-control',
  templateUrl: './report-control.component.html',
  styleUrls: ['./report-control.component.scss'],
})
export class ReportControlComponent {

  componentRef:any;
  constructor(private resolver: ComponentFactoryResolver ) {}

  createReportComponent(controlName: any, pageReference:any) {
    switch (controlName) {
      case 'date':
        const factory1 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory1)
        this.componentRef.instance.controlName = controlName;
        break;
      case 'time':
        const factory2 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory2)
        this.componentRef.instance.controlName = controlName;
        break;
      case 'text':
        const factory3 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory3)
        this.componentRef.instance.controlName = controlName;
        break;
      case 'image':
        const factory4 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory4)
        this.componentRef.instance.controlName = controlName;
        break;
      case 'line':
        const factory5 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory5)
        this.componentRef.instance.controlName = controlName;
        break;

    }
  }


  fontSizeHandler(){
    //Todo
  }

  borderColorHandler(){
    //TODO
  }

  backgroundColorHandler(){
    //TODO
  }

  fontColorHandler(){
    //TODO
  }

  textHandler(){
    //TODO
  }
}
