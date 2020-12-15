import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  // template:`
  // <br>
  // <span class="glyphicon glyphicon-heart" [class.highlighted]="isLiked" (click)="onClick()"> </span>
  // <span>{{ LikesCount }}</span>
  // <br>
  
  // `
})
export class LikeComponent implements OnInit {
  @Input ('likesCount') LikesCount: number;
  @Input('isliked') isLiked: boolean;
  showLikesbool: boolean;
  viewMode='default'

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.LikesCount += (this.isLiked) ? -1 : 1
    this.isLiked = !this.isLiked;

    console.log(this.LikesCount);
    console.log(this.isLiked);

  }
  showLikes(){
    return this.showLikesbool = true;
  }

}
