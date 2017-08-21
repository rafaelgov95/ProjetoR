import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Post } from './../../models/post';

@Injectable()
export class ServicePost {
  emitterDelivery = new EventEmitter();
  headers: Headers;
  params: URLSearchParams;

  token: string;
  private Url = 'http://localhost:3000/api/posts';

  constructor(private http: Http) {

    console.log("Servico de Posts")
    this.params = new URLSearchParams();
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (sessionStorage.getItem('currentUser')) {
      // this.token = JSON.parse(sessionStorage.getItem('currentUser'))['accessToken'];
      // this.headers.append('x-access-token', this.token)
    }
  }

  getAll(): Observable<Post[]> {
    return this.http.get(this.Url + '/listar').map((response: Response) => response.json());
  }

  getPost(id: string): Observable<Post> {
    this.params.set('_id', id);
    let options = new RequestOptions({ headers: this.headers, params: this.params });
    return this.http.get(this.Url + '/buscar', options)
      .map((response: Response) => response.json());
  }

  // getPost(id: string): Observable<Post> {
  //   console.log(id)
  //   return this.http.get(this.Url + '/buscar?_id=' + id, this.options).map((response: Response) => response.json());
  // }

  create(user: Post): Observable<Post> {

    return this.http.post(this.Url + '/save', user).map((response: Response) => response.json());
  }

  remove(post: Post): Observable<Post> {
    this.params.set('_id', post._id);
    let options = new RequestOptions({ headers: this.headers, params: this.params });
    return this.http
      .delete(this.Url + "/remove", options)
      .map((response: Response) => response.json());
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    if (currentUser && currentUser.accessToken) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + 'currentUser.accessToken ' });
      return new RequestOptions({ headers: headers });
    }
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