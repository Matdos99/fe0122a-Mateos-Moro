import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const route: Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ]
})
export class AuthRoutingModule { }
