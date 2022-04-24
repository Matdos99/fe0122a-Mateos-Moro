import { Router } from '@angular/router';
import { AuthService, Login } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user!:Login|null
isLoadingIn=false
errorMessage=undefined

  constructor(private authSrv:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((data)=> this.user=data)
  }


async onSubmit(form:NgForm){
  this.isLoadingIn=true
  try{
    this.isLoadingIn=false
    await this.authSrv.login(form.value).toPromise()
    this.route.navigate(['/home'])
  }catch(error:any){
    this.isLoadingIn=false
    this.errorMessage=error.error.error
    console.log(error)
    console.log(form.value)
  }


  }
}
