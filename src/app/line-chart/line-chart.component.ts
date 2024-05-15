import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
declare let Plotly: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit, OnChanges {
  @Input() id:any;
  @Input() height:any = 300;
  @Input() width:any = 300;
  @Input() plotData:any;
  @Input() fontColor:any;
  @Input() borderColor:any;
  @Input() backgroundColor:any = 'white';
  @Input() fontSize:any;

  trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
  };

  trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
  };

  data = [this.trace1, this.trace2];
  layout = {
    height: this.height,
    width: this.width,
    paper_bgcolor: this.backgroundColor,
    plot_bgcolor: this.backgroundColor,
    yaxis: {fixedrange: true},
    xaxis : {fixedrange: true},
    font:{
      size:10
    },
    margin: {
      l: 30,
      r: 30,
      t: 30,
      b: 30,
    },
  };
  config = { responsive: true };

  ngAfterViewInit(): void {
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['height']?.currentValue || changes['width']?.currentValue
    || changes['fontSize'] || changes['backgroundColor']) {
      this.layout.height = this.height;
      this.layout.width = this.width;
      this.layout.plot_bgcolor = this.backgroundColor;
      this.layout.paper_bgcolor = this.backgroundColor;
      this.layout.font.size = this.fontSize - 5
      setTimeout((res: any)=>{
        Plotly.react(this.id, this.data, this.layout, this.config)
      },100)
    }
  }
}
