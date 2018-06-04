import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: Http) { }
  postComment(comment){
    let headers= new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/commentpost',comment,{headers:headers})
    .pipe(map(res => res.json()));
  }
  getComments(){
    let headers= new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/api/comments')
    .pipe(map(res=>res.json()));
  }

}
