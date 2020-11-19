import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  height:number;
  mass:number;
  index:number;
  constructor() { }

  ngOnInit(): void {
  }

  btnClicked(_height,_mass){
    index=_height/((_mass/100)^2);

  }

}
