import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ReportControlComponent } from '../report-control/report-control.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  controlSelected = 'common';
  selectedFilePath: string = '';
  @ViewChild('report')reportControl!: ReportControlComponent
  @ViewChild('page', { read: ViewContainerRef }) pageRef!: ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver ){
  }
  ngAfterViewInit(): void {
    this.reportControl= new ReportControlComponent(this.resolver);

  }

  onFileSelected(event: any) {
    const selectedFile: File = event.target.files[0];
    if (selectedFile) {
      this.selectedFilePath = selectedFile.name;
      console.log(selectedFile);
    }
  }

  drop(ev: any){
    const data = ev.dataTransfer.getData("text");
    this.reportControl!.createReportComponent(data,this.pageRef)
  }

  drag(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  allowDrop(ev:any) {
    ev.preventDefault();
  }

  reportColorHandler(ev:any, type:string){
    console.log(ev,type)
  }

}
