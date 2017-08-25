import { SafeHtmlPipe } from './../shared/pipes/htmlview';


import { RouterModule,Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CKEditorModule} from '../../../node_modules/ng2-ckeditor/src/index';
import { HtmleditorComponent } from './htmleditor/htmleditor.component';
import { PostsComponent } from './posts/posts.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ServicePost } from './../shared/services/posts/ServicePost';



@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [BlogComponent, PostsComponent, HtmleditorComponent,SafeHtmlPipe],
  providers: [ServicePost],
  exports: [BlogComponent, HtmleditorComponent,CKEditorModule]
})
export class BlogModule { }
