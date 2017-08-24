

import { RouterModule,Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CKEditorComponent } from '../../../node_modules/ng2-ckeditor/src/ckeditor.component';
import { HtmleditorComponent } from './htmleditor/htmleditor.component';
import { PostsComponent } from './posts/posts.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CKEditorModule } from 'ng2-ckeditor';
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
  providers: [ServicePost],
  exports: [BlogComponent, HtmleditorComponent,CKEditorModule]
})
export class BlogModule { }
