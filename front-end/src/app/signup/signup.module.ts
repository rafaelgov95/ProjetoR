import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {FormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import { AlertService } from '../shared/services/alert.service';

import { LoginService } from '../shared/services/login/LoginService.service';


// import { SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  declarations: [SignupComponent],
  providers:[LoginService,AlertService],
  exports:[SignupComponent]
})
export class SignupModule { }
