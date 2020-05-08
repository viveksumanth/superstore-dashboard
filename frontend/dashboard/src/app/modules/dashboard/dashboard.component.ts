import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart=[];
  pieChart=[];
  choroplethmap=[];
  state = [];
  card1: any;
  card2: any;
  card3: any;
  card4: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.pieChart = this.dashboardService.pieChart();   
    this.card1 = this.dashboardService.card1();
    this.card2 = this.dashboardService.card2();
    this.card3= this.dashboardService.card3();
    this.card4 = this.dashboardService.card4();
    this.choroplethmap = this.dashboardService.choroplethmap();
    this.state = this.dashboardService.state();

  }

}
