//novo modulo texto
import { CKEditorComponent } from '../../../node_modules/ng2-ckeditor/src/ckeditor.component';

import { HtmleditorComponent } from './htmleditor/htmleditor.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PostsComponent } from './posts/posts.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { Router } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { AlertService } from '../shared/services/alert.service';
import { ServicePost } from './../shared/services/posts/ServicePost';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    FormsModule,  
    CKEditorModule 
     

  ],
  declarations: [BlogComponent, PostsComponent, HtmleditorComponent],
  providers: [ServicePost, AlertService],
  exports: [BlogComponent, HtmleditorComponent,CKEditorModule]
})
export class BlogModule { }
