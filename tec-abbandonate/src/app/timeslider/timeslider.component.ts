import { Component, OnInit } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DataService } from '../data.service';

@Component({
  selector: 'app-timeslider',
  templateUrl: './timeslider.component.html',
  styleUrls: ['./timeslider.component.css']
})
export class TimesliderComponent {

  constructor(private data : DataService) { }
  
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 2019;
  min = 1930;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 1950;
  vertical = false;

  onChange(year : number) {
    this.data.yearFrom = year;
    console.log(year);
    console.log(this.data.yearFrom);
  }

}
