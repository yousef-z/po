import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers;
  constructor(private service: DataService) { }

  ngOnInit(){
    this.service.getAll().subscribe(
      followers => {
        this.followers = followers;
        console.log(followers)
    },
    (error: AppError) => {
      if(error instanceof NotFoundError){
        alert("This post was not Found.");}
      else{
        throw (error);          
      }
    });
  }

}
