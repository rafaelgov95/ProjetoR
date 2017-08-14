import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from '../shared/services/login/LoginService.service';

import { AlertService } from '../shared/services/alert.service';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ AlertService, LoginService],
  declarations: [LoginComponent,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
