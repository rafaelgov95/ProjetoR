import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AlertService } from '../shared/services/alert.service';
import { LoginService } from '../shared/services/login/LoginService.service';




@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [HomeComponent],
  providers:[LoginService,AlertService],
  exports:[HomeComponent]
})
export class HomeModule { }
