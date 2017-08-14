import { EmitterDelivery } from './../EmitterDelivery/EmitterDelivery';
import { Observable } from 'rxjs';
import { Estacionamento } from './../../models/estacionamento';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EstacionamentoService {
  EmitterDelivery = new EventEmitter();

  private testUrl = 'http://localhost:3000/api/estacionamento/listar';

  constructor(private http: Http) { console.log("Servico de Estacionamentos") }


  getAll(): Observable<Estacionamento[]> {
    return this.http.get('http://localhost:3000/api/estacionamento/listar').map((response: Response) => response.json());
  }

  create(user: Estacionamento): Observable<Estacionamento[]> {
    //  headers.append('Authorization', 'Basic ' +
    // btoa('username:password')); 
    return this.http.post('http://localhost:3000/api/estacionamento/save', user).map((response: Response) => response.json());
  }

  getEstacionamentos() {
    return this.http.get(this.testUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllEstacionamentos(): Observable<Estacionamento[]> {

    return this.http.get(this.testUrl).map((response: Response) => response.json());

  }

  remove(est: any): Observable<Estacionamento> {

    return this.http
      .post('http://localhost:3000/api/estacionamento/remove',est )
      .map(this.extractData)
      .catch(this.handleError);
  }

  
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}