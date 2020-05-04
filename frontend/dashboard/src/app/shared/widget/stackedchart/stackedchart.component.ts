import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-stacked-chart',
  templateUrl: './stackedchart.component.html',
  styleUrls: ['./stackedchart.component.scss']
})
export class StackedchartComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];
  
  valueD:any;
  check:any[]=[];
  consumertech;
  consumerfurn;
  consumeroff;
  corporatetech;
  corporatefurn;
  corporateoff;
  officetech;
  officefurn;
  officeoff;
  Highcharts = Highcharts

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit(){
    // console.log(this.data)
    this.dashboardservice.consumertech().subscribe(data=>{
      this.consumertech = data
      this.check.push(this.consumertech)
    });
    this.dashboardservice.consumerfurn().subscribe(data=>{
      this.consumerfurn = data
      this.check.push(this.consumerfurn)
      // this.Stackedchart(this.check)
    });
    this.dashboardservice.consumeroff().subscribe(data=>{
      this.consumeroff = data
      this.check.push(this.consumeroff)
      // this.Stackedchart(this.check)
    });
    this.dashboardservice.corporatetech().subscribe(data=>{
      this.corporatetech = data
      this.check.push(this.corporatetech)
      // this.Stackedchart(this.check)
    });
    this.dashboardservice.corporatefurn().subscribe(data=>{
      this.corporatefurn = data
      this.check.push(this.corporatefurn)
      // this.Stackedchart(this.check)
    });
    this.dashboardservice.corporateoff().subscribe(data=>{
      this.corporateoff = data
      this.check.push(this.corporateoff)
      // this.Stackedchart(this.check)
    });
    this.dashboardservice.homeofftech().subscribe(data=>{
      this.officetech = data
      this.check.push(this.officetech )
      // this.Stackedchart(this.check)
    });
    this.dashboardservice.homeofffurn().subscribe(data=>{
      this.officefurn = data
      this.check.push(this.officefurn)
      // this.Stackedchart(this.check)
    });
    this.dashboardservice.homeoffoff().subscribe(data=>{
      this.officeoff = data
      this.check.push(this.officeoff )
      this.Stackedchart(this.consumertech,this.consumerfurn,this.consumeroff,this.corporatetech,this.corporatefurn,this.corporateoff,this.officetech,this.officefurn,this.officeoff)
    });

  }

  Stackedchart(consumertech,consumerfurn,consumeroff,corporatetech,corporatefurn,corporateoff,officetech,officefurn,officeoff){
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
    title: {
        text: 'Product Segment per category'
      },
    xAxis: {
      categories: ['Technology', 'Furniture', 'Office Supplies']
      },
    yAxis: {
      min: 0,
      title: {
          text: 'Total Number of Supplies per category'
      }
    },
    
    legend: {
        reversed: true
    },
    exporting:{
        enabled: true,
      },
      credits:{
        enabled: true,
      },
        series: [{
          name: 'Consumer',
          data: [consumertech,consumerfurn,consumeroff]
      }, {
          name: 'Corporate',
          data: [corporatetech,corporatefurn,corporateoff]
      }, {
          name: 'Home Office',
          data: [officetech,officefurn,officeoff]
      }]
    }
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 30000);
  }
}
