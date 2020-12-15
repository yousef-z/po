import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.css']
})
export class ArchiveDetailsComponent implements OnInit {
  year;
  month;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap
    this.year = param.get('year')
    this.month = param.get('month')
} 
  toList(){
    this.router.navigate(['archive']);
  } 
  
  
}
