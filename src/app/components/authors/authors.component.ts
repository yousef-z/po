import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  authorsCount;
  constructor(
    private route: ActivatedRoute,
    service: AuthorsService,
  ) {
    this.authors = service.getAuthors();
    this.authorsCount = service.getCount();
   }

  ngOnInit() {
  }

}
