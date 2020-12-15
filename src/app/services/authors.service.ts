import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors = ['author 1', 'author 2', 'author 3']
  
  getAuthors(){
    return this.authors;
  }
  getCount(){
    return this.authors.length;
  }
  constructor() { }
}
