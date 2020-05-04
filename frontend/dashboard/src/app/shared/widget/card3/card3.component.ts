import { Component, OnInit,Input } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component implements OnInit {
  @Input() data: any = [];
  value:any;

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
    
    (this.data).subscribe((data)=>{
      console.log(this.data)
      console.log(data)
      this.value = data
    }) 
  }
}
