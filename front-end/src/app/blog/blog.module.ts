

import { RouterModule,Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CKEditorComponent} from '../../../node_modules/ng2-ckeditor/src/ckeditor.component';

import {CKButtonDirective} from '../../../node_modules/ng2-ckeditor/src/ckbutton.directive';
import {CKGroupDirective} from '../../../node_modules/ng2-ckeditor/src/ckgroup.directive';
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
    FormsModule
  ],
  declarations: [BlogComponent, PostsComponent, HtmleditorComponent,CKEditorComponent,CKGroupDirective,CKButtonDirective,CKGroupDirective],
  providers: [ServicePost],
  exports: [BlogComponent, HtmleditorComponent]
})
export class BlogModule { }
