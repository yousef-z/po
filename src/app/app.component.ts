import { ColorChangedArgs } from './components/favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testme';
  spinner = {
    title: "Title of spinner",
    isgreen: true
  }
//////////////////////
  tweet = {
    isLiked : false,
    likesCount: 10,
    body: 'this is the tweet body'
  }

  ChangeColor(isGree: ColorChangedArgs){
    console.log("color has been changed to blue ", isGree.greenValue);
  }
}
