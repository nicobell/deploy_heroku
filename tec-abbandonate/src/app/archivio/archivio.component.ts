import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/mock-data';

@Component({
  selector: 'app-archivio',
  templateUrl: './archivio.component.html',
  styleUrls: ['./archivio.component.css']
})
export class ArchivioComponent implements OnInit {

  constructor() { }

  data = DATA;
  

  ngOnInit() {
  }

}
