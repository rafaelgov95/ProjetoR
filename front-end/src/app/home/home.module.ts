import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {FormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';


import { AlertService } from '../shared/services/alert.service';

import { LoginService } from '../shared/services/login/LoginService.service';
import { PostComponent } from './post/post.component';


// import { SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [HomeComponent,PostComponent],
  providers:[LoginService,AlertService],
  exports:[HomeComponent]
})
export class HomeModule { }
