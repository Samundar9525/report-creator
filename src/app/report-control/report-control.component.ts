import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DragResizeComponent } from '../drag-resize/drag-resize.component';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-report-control',
  templateUrl: './report-control.component.html',
  styleUrls: ['./report-control.component.scss'],
})
export class ReportControlComponent {

  componentRef:any;
  controlList:any = [];
  count = 0;
  controlId!:number;
  constructor(private resolver: ComponentFactoryResolver,
    private reportService: ReportService) {
      this.reportService.selectedControl.subscribe((res:any)=>{
        this.controlId = res;
      })
    }

  createReportComponent(controlName: any, pageReference:any) {
    this.count += 1;
    switch (controlName) {
      case 'date':
        const factory1 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory1)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count;
        this.controlList.push(this.componentRef);
        break;
      case 'time':
        const factory2 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory2)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count;
        this.controlList.push(this.componentRef);
        break;
      case 'text':
        const factory3 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory3)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count;
        this.controlList.push(this.componentRef);
        break;
      case 'image':
        const factory4 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory4)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count;
        this.controlList.push(this.componentRef);
        break;
      case 'line':
        const factory5 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory5)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count.toString();
        this.controlList.push(this.componentRef);
        break;
      case 'bar':
        const factory6 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory6)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count.toString();
        this.componentRef.instance.height = 320;
        this.componentRef.instance.width = 320;
        this.controlList.push(this.componentRef);
        break;
      case 'stack-bar':
        const factory7 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory7)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count.toString();
        this.componentRef.instance.height = 320;
        this.componentRef.instance.width = 320;
        this.controlList.push(this.componentRef);
        break;
      case 'pie-chart':
        const factory8 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory8)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count.toString();
        this.componentRef.instance.height = 320;
        this.componentRef.instance.width = 320;
        this.controlList.push(this.componentRef);
        break;
      case 'line-chart':
        const factory9 = this.resolver.resolveComponentFactory(DragResizeComponent);
        this.componentRef = pageReference.createComponent(factory9)
        this.componentRef.instance.controlName = controlName;
        this.componentRef.instance.id = this.count.toString();
        this.componentRef.instance.height = 320;
        this.componentRef.instance.width = 320;
        this.controlList.push(this.componentRef);
        break;
    }
  }


  fontSizeHandler(ev:any){
    console.log(ev)
    this.controlList.map((res:any)=>{
      if (res.instance.id === this.controlId){
          res.instance.fontSize = ev;
      }
    })
  }

  borderColorHandler(ev:any){
    this.controlList.map((res:any)=>{
      if (res.instance.id === this.controlId){
          res.instance.borderColor = '1px solid '+ev.name;
      }
    })
  }

  backgroundColorHandler(ev:any){
    this.controlList.map((res:any)=>{
      if (res.instance.id === this.controlId){
          res.instance.backgroundColor = ev.name;
      }
    })
  }

  fontColorHandler(ev:any){
    this.controlList.map((res:any)=>{
      if (res.instance.id === this.controlId){
          res.instance.fontColor = ev.name;
      }
    })
  }

  textHandler(ev:any){
    console.log(ev)
    this.controlList.map((res:any)=>{
      if (res.instance.id === this.controlId){
          res.instance.text = ev;
      }
    })
  }
}
