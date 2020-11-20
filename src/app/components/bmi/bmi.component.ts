import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})

export class BmiComponent implements OnInit {

  index:number;
  backgroundsForTable:string[];
  constructor(){
    this.index=0;
    this.backgroundsForTable=[];
  }
  ngOnInit(): void {
  }
  calculateBMI(height:any,mass:any)
  {
    this.index=parseFloat((mass/((height/100)^2)).toFixed(2));
    if(this.index < 18.5)
    {
      this.backgroundsForTable=[];
      this.backgroundsForTable[0] = "table-success";
    }
    else if(this.index < 24.9)
    {
      this.backgroundsForTable=[];
      this.backgroundsForTable[1] = "table-success";
    }
    else if(this.index < 29.9)
    {
      this.backgroundsForTable=[];
      this.backgroundsForTable[2] = "table-success";
    }
    else
    {
      this.backgroundsForTable=[];
      this.backgroundsForTable[3] = "table-success";
    };
  }
}
