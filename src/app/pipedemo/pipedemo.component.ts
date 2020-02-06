import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent {
  strData:string;
  numData:number;
  date:Date;

  constructor() 
  {
      this.strData="Hello ! welcome to the worlld of spa's";
      this.numData=Math.PI;
      this.date=new Date();
   }

  
}
