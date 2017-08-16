import { HeaderComponent } from './shared/components/header/header.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent],
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserModule, 
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
  
  ], exports: [   
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
