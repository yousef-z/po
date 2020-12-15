import { POSTS_URL } from './../common/app.config';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map  } from 'rxjs/operators';

import { throwError } from 'rxjs'
@Injectable({
   providedIn: 'root'
})
export class DataService {
  

  constructor(@Inject(POSTS_URL) private url , private http: HttpClient) {}

//   getAll(){
//     return this.http.get(this.url)
//         .pipe(catchError(this.handleError));
//   }

  getAll(){
    return this.http.get(this.url)
         .pipe(map((response: Response) => response)
              ,catchError((this.handleError)))
  
  }
  
  create(resouce){
    return this.http.post(this.url, resouce).pipe(map(
        (response: Response) => response)
        ,catchError((this.handleError)));
  }

  update(resource, obj){
    return this.http.patch(this.url + '/' + resource.id, obj).pipe(map(
        (response: Response) => response)
        ,catchError(this.handleError));
  }

  delete(id){
    return throwError(new AppError())
    // return this.http.delete(this.url + '/' + id).pipe(map(
    //     (response: Response) => response)
    //     ,catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404)
        return throwError(new NotFoundError()) ;
    if (error.status === 400)
      return throwError( new BadInput(error) )
    // Observable.throw new Error("");
    return throwError(new AppError(error));
  }
}

