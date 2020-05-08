import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class DashboardService {

  uri = 'http://localhost:5000';
  Emmiter;
  value:any;
  card_value:any;
  values=[];
  data = [];
  mapplotdata=[];
  
  constructor(private http: HttpClient) { }

  bigChart() 
    {
      this.consumertech()
      this.consumeroff()
      this.consumerfurn()
      this.corporatetech()
      this.corporatefurn()
      this.corporateoff()
      this.homeofftech()
      this.homeofffurn()
      this.homeoffoff()
      // console.log(this.data)
      return this.data
    }
  pieChart()
    {
      this.top5sales()
      return this.data
    }
  state(){
    this.statedata()
    return this.data;
    }
  choroplethmap(){
    this.worlddata()
    return this.data
  }
  card1(){
    let headers = new Headers();
    // return 50;
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.uri}/posts/dsr`)
  }
  card2(){
    let headers = new Headers();
    // return 50;
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.uri}/posts/atv`)
  }
  card3()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // this.consumertech()
    return this.http.get(`${this.uri}/posts/noc`)  
    
  }
  card4()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // this.consumertech()
    return this.http.get(`${this.uri}/posts/averagesales`)  
    
  }
  
  consumertech(){
  return this.http.get(`${this.uri}/posts/consumer_tech`)

  }
  consumerfurn(){
    return this.http.get(`${this.uri}/posts/consumer_furn`)

  }
  consumeroff(){
   return this.http.get(`${this.uri}/posts/consumer_off`)

  }
  corporatetech(){
    return this.http.get(`${this.uri}/posts/corporate_tech`)

  }
  corporatefurn(){
    return this.http.get(`${this.uri}/posts/corporate_furn`)

  }
  corporateoff(){
    return this.http.get(`${this.uri}/posts/corporate_off`)

  }
  homeofftech(){
    return this.http.get(`${this.uri}/posts/homeoff_tech`)

  }
  homeofffurn(){
    return this.http.get(`${this.uri}/posts/homeoff_furn`)

  }
  homeoffoff(){
    return this.http.get(`${this.uri}/posts/homeoff_off`)

  }
  top5sales(){
    return this.http.get(`${this.uri}/posts/top5sales`)
  }

  worlddata(){
    this.http.get(`${this.uri}/posts/orderspercountry`)
    this.data = [
          ['fo', 0],
          ['um', 1],
          ['us', 2],
          ['jp', 3],
          ['sc', 4],
          ['in', 5],
          ['fr', 6],
          ['fm', 7],
          ['cn', 8],
        ];
        console.log(this.data)
        return this.data
  };
  
  statedata(){
    this.data = [
      ['lk-bc', 0],
      ['lk-mb', 1],
      ['lk-ja', 2],
      ['lk-kl', 3],
      ['lk-ky', 4],
      ['lk-mt', 5],
      ['lk-nw', 6],
      ['lk-ap', 7],
      ['lk-pr', 8],
      ['lk-tc', 9],
      ['lk-ad', 10],
      ['lk-va', 11],
      ['lk-mp', 12],
      ['lk-kg', 13],
      ['lk-px', 14],
      ['lk-rn', 15],
      ['lk-gl', 16],
      ['lk-hb', 17],
      ['lk-mh', 18],
      ['lk-bd', 19],
      ['lk-mj', 20],
      ['lk-ke', 21],
      ['lk-co', 22],
      ['lk-gq', 23],
      ['lk-kt', 24]
  ];
  return this.data;
  }
}




//   //   this.data = [
//   //     ['fo', 0],
//   //     ['um', 1],
//   //     ['us', 2],
//   //     ['jp', 3],
//   //     ['sc', 4],
//   //     ['in', 5],
//   //     ['fr', 6],
//   //     ['fm', 7],
//   //     ['cn', 8],
//   //     [],
//   //   ];
//   //   console.log(this.data)
//   //   return this.data
//   // };
// }
