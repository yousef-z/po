import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archives;
  constructor() { }

  ngOnInit() {
    this.getArchives()
    
  }
  getArchives(){
    return this.archives = [
      {year: 2017, month: 1},
      {year: 2017, month: 2},
      {year: 2017, month: 3},
      {year: 2017, month: 4}
  ]
  }

  // ss(route){
  //   let year=route.queryParam
  // }
  // showDetails(archive){

  // }
}
