import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {

            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
    redirectTo(){
       if (localStorage.getItem('isLoggedin')) {

            return 'dashboard';
        }

        // this.router.navigate(['/dashboard']);
        return 'login';

    }
}
