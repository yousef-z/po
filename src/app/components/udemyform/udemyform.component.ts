import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemyform',
  templateUrl: './udemyform.component.html',
  styleUrls: ['./udemyform.component.css']
})
export class UdemyformComponent  {
  categories =[
    {'id': 1, 'name': 'Development'},
    {'id': 2, 'name': 'Art'},
    {'id': 3, 'name': 'Languages'},
    {'id': 4, 'name': 'Finance'}
  ]

  log(x){
    console.log(x);
  }

  getCategories(){
    return this.categories;
  }
}
