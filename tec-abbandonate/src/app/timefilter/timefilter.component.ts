import { Component, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { noUiSlider } from "nouislider";

@Component({
  selector: 'app-timefilter',
  templateUrl: './timefilter.component.html',
  styleUrls: ['./timefilter.component.css']
})
export class TimefilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var startSlider = document.getElementById('slider-start');

    noUiSlider.create(startSlider, {
      start: [20, 80],
      range: {
          'min': [0],
          'max': [100]
      }
    });
  }

}
