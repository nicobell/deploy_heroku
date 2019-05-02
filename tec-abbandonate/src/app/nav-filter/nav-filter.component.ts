import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.css']
})

export class NavFilterComponent implements OnInit {

  cat1 = 'audio';
  cat2 = 'video';
  cat3 = 'cat3';
  all = 'all'

  @Output() chosen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(id : string) {
    this.chosen.emit(id);
    //console.log(id);
  }

}
