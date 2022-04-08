import { AuthData } from './../auth.service';
import { Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading:boolean=false
  user!:AuthData|null

  constructor(private authSrv:AuthService, private route:Router) { }

  ngOnInit(): void {
   }

  async login(form:NgForm){
    this.isLoading=true
  try{
    this.isLoading=false
   await this.authSrv.login(form.value).toPromise()


  }
  catch (error){
    console.log(error)
    form.reset()
    this.isLoading=false
  }
  }

}


