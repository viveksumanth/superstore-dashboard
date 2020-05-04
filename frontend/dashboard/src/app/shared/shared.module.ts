import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list'
import {RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { StackedchartComponent } from './widget/stackedchart/stackedchart.component';
import { HighchartsChartModule } from 'highcharts-angular'
import { BrowserModule } from '@angular/platform-browser';
import { PieComponent } from './widget/pie/pie.component';
import { Card1Component } from './widget/card1/card1.component';
import { Card2Component } from './widget/card2/card2.component';
import { Card3Component } from './widget/card3/card3.component';
import { DashboardService } from '../modules/dashboard.service';
import { ChoroplethmapComponent } from './widget/choroplethmap/choroplethmap.component';
import { Card4Component } from './widget/card4/card4.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    StackedchartComponent,
    PieComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    ChoroplethmapComponent,
    Card4Component,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    StackedchartComponent,
    PieComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    ChoroplethmapComponent,
  ],
  providers: [DashboardService],
})

export class SharedModule { }
