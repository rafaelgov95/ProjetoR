import { HtmleditorComponent } from './htmleditor/htmleditor.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { LoginModule } from './../login/login.module';

import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PostsComponent } from './posts/posts.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { Router } from '@angular/router';

import { AlertService } from '../shared/services/alert.service';
import { ServicePost } from './../shared/services/posts/ServicePost';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()

  ],
  declarations: [BlogComponent,PostsComponent,HtmleditorComponent],
  providers:[ServicePost,AlertService],
  exports:[BlogComponent,LoginModule,HtmleditorComponent]
})
export class BlogModule { }
