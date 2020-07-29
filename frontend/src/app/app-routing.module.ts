import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebcamComponent } from './pages/webcam/webcam.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signgup-page/signup-page.component';





const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'webcam', component: WebcamComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }