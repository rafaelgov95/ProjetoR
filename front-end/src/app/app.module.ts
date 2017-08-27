import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './shared/components/toast/ng2-toast-config';
import { SafeHtmlPipe } from './shared/pipes/htmlview';
import { HeaderComponent } from './shared/components/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared';
import { AppComponent } from './app.component';
import { ToastModule, ToastOptions } from 'ng2-toastr';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent],
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot()

  ], exports: [
    BrowserAnimationsModule ],
  providers: [
    AuthGuard,
    { provide: ToastOptions, useClass: CustomOption },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
