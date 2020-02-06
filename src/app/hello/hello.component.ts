import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
username:string;

  constructor()
   
  { 
    this.username="buddy";
  }

 greet=()=>{
   alert(`hello ${this.username}`);
 }

}
