import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { color } from '@amcharts/amcharts4/core';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.css']
})

export class NavFilterComponent implements OnInit {

  cat1 = 'audio';
  cat2 = 'video';
  cat3 = 'comunicazione';
  cat4 = 'computer';
  cat5 = 'fotografia';
  all = 'all';

  @Output() chosen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(id : string) {
    this.chosen.emit(id);
    
    var x = document.getElementsByClassName("nav-link");
    var i:number;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }

    if (document.getElementById(id).focus){
      document.getElementById(id).className += " active";
    } 
    
    
  }

}
