import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
declare let Plotly: any;
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements AfterViewInit, OnChanges {

  @Input() id:any;
  @Input() height:any = 300;
  @Input() width:any = 300;
  @Input() plotData:any;
  @Input() fontColor:any;
  @Input() borderColor:any;
  @Input() backgroundColor:any = 'white';
  @Input() fontSize:any;

  data = [
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      type: 'bar',
    },
  ];
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
    || changes['backgroundColor'] || changes['fontSize'] ) {
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
