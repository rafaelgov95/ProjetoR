import { PostsComponent } from './posts/posts.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {FormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';


import { AlertService } from '../shared/services/alert.service';

import { LoginService } from '../shared/services/login/LoginService.service';



// import { SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [BlogComponent,PostsComponent],
  providers:[LoginService,AlertService],
  exports:[BlogComponent]
})
export class BlogModule { }
