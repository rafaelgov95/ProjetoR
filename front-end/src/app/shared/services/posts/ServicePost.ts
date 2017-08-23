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
    // Url:string='http://localhost:3000';
    Url:string='/';

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
    return this.http.get(this.Url + 'listar').map((response: Response) => response.json());
  }

  getPost(id: string): Observable<Post> {
    this.params.set('_id', id);
    let options = new RequestOptions({ headers: this.headers, params: this.params });
    return this.http.get(this.Url + 'buscar', options)
      .map((response: Response) => response.json());
  }

  updatePost(body: Post): Observable<Comment[]> {
    this.params.set('_id', body._id);
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers, params: this.params  }); // Create a request option

    return this.http.put(this.Url+'update', body, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  create(user: Post): Observable<Post> {

    return this.http.post(this.Url + 'save', user).map((response: Response) => response.json());
  }

  remove(post: Post): Observable<Post> {
    this.params.set('_id', post._id);
    let options = new RequestOptions({ headers: this.headers, params: this.params });
    return this.http
      .delete(this.Url + "remove", options)
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
}