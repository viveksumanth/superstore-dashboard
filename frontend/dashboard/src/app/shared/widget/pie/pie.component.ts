import { Component, OnInit, Input} from '@angular/core';
import * as Highcharts from 'highcharts'
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  chartOptions: {}
  @Input() data: any = [];
  valueD:any
  check:any;
  Highcharts = Highcharts

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit(){

    this.dashboardservice.top5sales().subscribe(data=>{
      this.valueD = data
      // console.log(data)
      // console.log(this.valueD)
      this.piechart(this.valueD) 
    });
    }
    piechart(valuesofseris){
      this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
        text: 'Top 5 sales'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      exporting:{
        enabled: true,
      },
      credits:{
        enabled: true,
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: valuesofseris[0].Product_Name,
            y: parseInt(valuesofseris[0].Sales),
            sliced: true,
            selected: true
        }, {
            name: valuesofseris[1].Product_Name,
            y: parseInt(valuesofseris[0].Sales),
        }, {
            name: valuesofseris[2].Product_Name,
            y: parseInt(valuesofseris[0].Sales),
        }, {
            name: valuesofseris[3].Product_Name,
            y: parseInt(valuesofseris[0].Sales),
        }, {
            name: valuesofseris[4].Product_Name,
            y: parseInt(valuesofseris[0].Sales),
        }]
      }]
      }
    }
  }
