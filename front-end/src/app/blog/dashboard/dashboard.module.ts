import { PipesModule } from './../../shared/pipes/pipes-module';
import { SafeHtmlPipe } from './../../shared/pipes/htmlview';
import { HtmleditorComponent } from './htmleditor/htmleditor.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ServicePost } from './../../shared/services/posts/ServicePost';
import { DashboardComponent } from './dashboard.component';
import {CKEditorModule} from '../../../../node_modules/ng2-ckeditor/src/index';


import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    DashboardRoutingModule,
    PipesModule
  ],
  declarations: [ DashboardComponent,HtmleditorComponent],
  providers: [ServicePost],
  exports: [CKEditorModule,PipesModule]
})
export class DashboardModule { }
