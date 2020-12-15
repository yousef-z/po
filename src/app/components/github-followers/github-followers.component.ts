import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})

export class GithubFollowersComponent implements OnInit {

  followers: any;
  constructor(
    private service: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    //combine two observables.
    combineLatest(
      [
        this.route.paramMap, 
        this.route.queryParamMap])
        .pipe(
          switchMap(
            combined => {
              let username = combined[0].get('username');
              let id = combined[0].get('id');
              let page = combined[1].get('page');
              let order = combined[1].get('order');
              return this.service.getAll();
            }
          )
        ) 
        .subscribe(
          followers => {
            this.followers = followers
          },
          (error: AppError) => {
            if(error instanceof NotFoundError){
              alert("This post was not Found.");}
            else throw error;
          }
        );
  }
}