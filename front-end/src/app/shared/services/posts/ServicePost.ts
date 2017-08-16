import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Post } from './../../models/post';

@Injectable()
export class ServicePost {
  emitterDelivery = new EventEmitter();
  headers: Headers;
  options: RequestOptions;
  token: string;
  private Url = 'http://localhost:3000/api/posts';

  constructor(private http: Http) {

    console.log("Servico de Posts")

    this.headers = new Headers({
      'Content-Type': 'application/json'
    });

    if (sessionStorage.getItem('currentUser')) {
      this.token = JSON.parse(sessionStorage.getItem('currentUser'))['accessToken'];
      this.headers.append('x-access-token', this.token)  
    }
    
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAll(): Observable<Post[]> {
    return this.http.get(this.Url + '/listar').map((response: Response) => response.json());
  }
  getPost(id: string): Observable<Post> {
    console.log(id)
    return this.http.get(this.Url + '/buscar?_id=' + id, this.options).map((response: Response) => response.json());
  }
  create(user: Post): Observable<Post[]> {
    return this.http.post(this.Url + '/save', user).map((response: Response) => response.json());
  }

  remove(post: Post): Observable<Post> {
    return this.http
      .delete(this.Url + "/remove/?" + "_id" + "=" + post._id, this.options)
      .map((response: Response) => response.json());
  }


  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body || {};
  // }
  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   return Observable.throw(errMsg);
  // }
}