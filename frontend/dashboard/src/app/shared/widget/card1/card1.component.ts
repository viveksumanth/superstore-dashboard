import { Component, OnInit,Input } from '@angular/core';
import { Card3Component } from '../card3/card3.component';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  @Input() data: any = [];
  value: any;
  constructor() { }

  ngOnInit() {
    // this.getcardvalue()
    (this.data).subscribe((data)=>{
      console.log(data)
      this.value = data
      this.value = this.value
    }) 
  }

}
