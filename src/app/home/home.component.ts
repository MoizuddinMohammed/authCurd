import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title='Home PAGE loaded';
  salary=12505;
  tax=0.18;
  dob="1993-09-12";
  isDisabled=false;
  colorname='red';
  cls="";
  sty={"color":"red","font-size":"30px;","text-align":"center"}
  colors=['green','blue','red'];
  constructor() { }

  ngOnInit(): void {
  }
  alertMe(n:string){
    alert('Hiiii '+n);
    this.isDisabled=!this.isDisabled;
    this.colorname='green';
    this.cls="cls";
  }
}
