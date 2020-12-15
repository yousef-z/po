import { DataService } from '../../services/data.service';
import { throwError } from 'rxjs';
import { BadInput } from '../../common/bad-input';
import { NotFoundError } from '../../common/not-found-error';
import { AppError } from '../../common/app-error';
import { PostService } from '../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private service: DataService) {  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value}
    this.posts.splice(0, 0, post);

    input.value=''
    //in the course he converted the post to a string as: this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
    this.service.create(post).subscribe(
      newPost => {
        console.log(newPost)
        post['id'] = newPost['id']
        // this.posts.splice(0, 0, post);
    },
    (error: AppError) => {
      this.posts.splice(0, 1)

      if(error instanceof NotFoundError)
        alert("This page you requested was not Found.");
      if (error instanceof BadInput){
        //this.form.setErrors(error.originalError);
        alert("Bad Request Error")}
        
      else{
        throw (error);          
      }
    });
  }

  updatePost(post: HTMLInputElement){
    let toBePatched = {isRead: true}
    this.service.update(post, toBePatched ).subscribe(
      updatedPost => {
        console.log(updatedPost);
    },
    (error: AppError) => {
      if(error instanceof NotFoundError){
        alert("This post was not Found.");}
      else{
        throw (error);          
      }
    });
  }

  deletePost(post: HTMLInputElement){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(
      () => {
        
    },
    (error: AppError) => {
      this.posts.splice(index, 0, post);

      if(error instanceof NotFoundError){
        alert("This post was not Found.");}
      else{
        throw (error);          
      }
    });
  }

  ngOnInit(){
    this.service.getAll().subscribe(
      posts => {
        this.posts = posts;
        console.log(posts)
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


