import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WebcamComponent } from './pages/webcam/webcam.component';
import { SignupPageComponent } from './pages/signgup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WebReqInterceptor } from './web-req.interceptor';
import { AuthService } from './auth.service';
import {WebcamModule} from 'ngx-webcam';
import { WebcamService } from './webcam.service';





@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule, HttpClientModule, WebcamModule ],
  declarations: [ AppComponent,WebcamComponent, LoginPageComponent, SignupPageComponent],
  bootstrap:    [ AppComponent ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true },WebcamService]
})
export class AppModule { }
