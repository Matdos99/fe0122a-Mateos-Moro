import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistractionComponent } from './registraction/registraction.component';

const router :Routes =[
  {
    path: 'login',
    component:LoginComponent

  },{
    path:'registration',
    component:RegistractionComponent

  }
]


@NgModule({
  imports: [
    RouterModule.forChild(router)
  ]
})
export class AuthRoutingModule { }
