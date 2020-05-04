import { Component, OnInit,Input } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';
@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.scss']
})
export class Card4Component implements OnInit {
  @Input() data: any = [];
  value:any;

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit(){
    (this.data).subscribe((data)=>{
      console.log(this.data)
      console.log(data)
      this.value = data
    })
  }


}
