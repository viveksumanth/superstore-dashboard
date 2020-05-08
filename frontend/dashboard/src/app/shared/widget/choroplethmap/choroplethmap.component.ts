declare var require: any;
import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import MapModule from 'highcharts/modules/map'
import { keyValuesToMap } from '@angular/flex-layout/extended/typings/style/style-transforms';

MapModule(Highcharts);

const map = require('@highcharts/map-collection/custom/world.geo.json')

@Component({
  selector: 'app-choroplethmap',
  templateUrl: './choroplethmap.component.html',
  styleUrls: ['./choroplethmap.component.scss']
})

export class ChoroplethmapComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts
  chart;
  updateFromInput = false;
  chartConstructor = "mapChart";
  chartCallback;
  
  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
    this.chartOptions=
      {
        chart: {
            map: map,
            backgroundColor:'#d7e7ff',
        },
    
        title: {
            text: 'Sales per Country'
            
        },
    
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
    
        colorAxis: {
            min: 0
        },
        exporting:{
            enabled: true,
          },
        credits:{
            enabled: true,
          },
        series: [{
            data: this.mapdata(),
            name: 'No of Orders',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
      }
      HC_exporting(Highcharts);
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 30000);
}
mapdata(){
  
  console.log(this.data)
}
}
