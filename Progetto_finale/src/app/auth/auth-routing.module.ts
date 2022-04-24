import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ]
})
export class AuthRoutingModule { }
