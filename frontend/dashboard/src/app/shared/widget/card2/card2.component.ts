import { Component, OnInit,Input } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
  
  @Input() data: any = [];
  value:any;
  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
    // this.getcardvalue()
    (this.data).subscribe((data)=>{
      console.log(data)
      this.value = data
    }) 
  }

}
