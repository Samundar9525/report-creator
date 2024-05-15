import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ReportControlComponent } from '../report-control/report-control.component';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  controlSelected = 'common';
  selectedFilePath: string = '';
  textValue: string = 'Text';
  @ViewChild('report')reportControl!: ReportControlComponent
  @ViewChild('page', { read: ViewContainerRef }) pageRef!: ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private reportService: ReportService ){
      this.reportService.inputText.subscribe((res:any)=>{
        console.log(res);
        this.textValue = res;
      })
  }
  ngAfterViewInit(): void {
    this.reportControl= new ReportControlComponent(this.resolver,this.reportService);

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
   switch(type){
    case 'bgcol' :
      this.reportControl.backgroundColorHandler(ev);
    break;
    case 'fontcol':
      this.reportControl!.fontColorHandler(ev);
    break;
    case 'bordercol':
      this.reportControl!.borderColorHandler(ev);
    break;
   }
  }

  changeText(ev:any){
    this.reportControl.textHandler(ev);
  }

  fontSizeHandler(ev:any){
    this.reportControl!.fontSizeHandler(ev);
  }
}
