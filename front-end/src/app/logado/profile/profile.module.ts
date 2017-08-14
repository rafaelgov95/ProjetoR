import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {PageHeaderOpcoesModule} from './../../shared/modules/page-header-opcoes/page-header-opcoes.module'

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PageHeaderModule } from './../../shared';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    // PageHeaderModule,
    PageHeaderOpcoesModule
    
  ], 
   providers :[],
   declarations: [ProfileComponent],
   exports:[ProfileComponent]
})
export class ProfileModule { }
