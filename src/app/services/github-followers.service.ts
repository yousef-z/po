// import { POSTS_URL } from './../common/app.config';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GithubFollowersService extends DataService{
  constructor( http: HttpClient) {
    //todo refactor it 
    super('' , http)
  }
}


