//Importação dos Modulos Angulares
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
//Importação dos Modulos
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CKEditorModule } from '../../../../node_modules/ng2-ckeditor/src/index';
// import { MdPaginatorModule } from '@angular/material';
//Importação Pipes
import { PipesModule } from './../../shared/pipes/pipes-module';
import { SafeHtmlPipe } from './../../shared/pipes/htmlview';
//Importação Do Toast
import { CustomOption } from './../../shared/components/toast/ng2-toast-config';
import { ToastModule, ToastOptions } from 'ng2-toastr';
import { DialogsModule } from './../../shared/modules/dialogs.module';
//Importação Componentes
import { HtmleditorComponent } from './htmleditor/htmleditor.component';
import { DashboardComponent } from './dashboard.component';
import { ServicePost } from './../../shared/services/posts/ServicePost';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    DashboardRoutingModule,
    PipesModule,
    // MdPaginatorModule,
    DialogsModule,
    ToastModule.forRoot(),
  ],
  declarations: [DashboardComponent, HtmleditorComponent],
  providers: [ServicePost,{ provide: ToastOptions, useClass: CustomOption }],
  exports: [CKEditorModule, PipesModule,DialogsModule]
})
export class DashboardModule { }
