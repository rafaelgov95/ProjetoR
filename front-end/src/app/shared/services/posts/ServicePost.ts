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
  EmitterDelivery = new EventEmitter();

  private Url = 'http://localhost:3000/api/posts';

  constructor(private http: Http) {

    console.log("Servico de Posts")
  }


  getAll(): Observable<Post[]> {
    return this.http.get(this.Url + '/listar').map((response: Response) => response.json());
  }
  getPost(id: string): Observable<Post> {
    console.log(id)
    return this.http.get(this.Url + '/buscar?_id='+ id ).map((response: Response) => response.json());
  }
  create(user: Post): Observable<Post[]> {
    return this.http.post(this.Url + '/save', user).map((response: Response) => response.json());
  }

  // getEstacionamentos() {
  //   return this.http.get(this.testUrl)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  // getAllEstacionamentos(): Observable<Estacionamento[]> {

  //   return this.http.get(this.testUrl).map((response: Response) => response.json());

  // }

  remove(est: any): Observable<Post> {

    return this.http
      .delete('/api/posts/remove', est)
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