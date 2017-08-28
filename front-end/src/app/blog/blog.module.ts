import { PipesModule } from './../shared/pipes/pipes-module';
import { SafeHtmlPipe } from './../shared/pipes/htmlview';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule,Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    DashboardModule,
    PipesModule
   
  ],
  declarations: [BlogComponent, PostsComponent],
  providers: [ServicePost],
  exports: [DashboardModule,PipesModule]
})
export class BlogModule { }
