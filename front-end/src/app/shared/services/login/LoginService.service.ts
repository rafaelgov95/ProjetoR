import { Login } from './../../models/login';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    logar(email: string, senha: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParams = new URLSearchParams();
       urlSearchParams.append('email', email);
        urlSearchParams.append('senha', senha);
        let body = urlSearchParams.toString()
        return this.http.post('http://localhost:3000/api/autentica', body, { headers: headers })
            .map((response: Response) => {
                let body = response.json();
                if (body) {
                    if (body.user && body.user.accessToken) {
                        sessionStorage.setItem('currentUser', JSON.stringify(body.user));
                    }
                }
            });
    }

    create(user: Login) {
        console.log("AQUI PORA", user);
        return this.http.post('http://localhost:3000/api/login/save', user).map((response: Response) => response.json());
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}