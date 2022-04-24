import { Router } from '@angular/router';
import { AuthService, Login} from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user={
    username:'',
  email:'',
  password:'',
  role:['']
  }
  isLoading=false
  errorMessage=undefined

  constructor(private authSrv:AuthService, private route:Router) {
    this.authSrv.isLoggedIn$.subscribe(isLoadingIn=>{this.isLoading=isLoadingIn})
   }

  ngOnInit(): void {

  }

 async onSignup(form:NgForm){
   this.user.username=form.value.username
   this.user.password=form.value.password
   this.user.email=form.value.email
   this.user.role.splice(0,1)
   this.user.role.push(form.value.ruolo)

  this.isLoading=true
  try{
    this.isLoading=false
    await this.authSrv.signup(this.user).toPromise()
    form.reset()
    this.route.navigate(['/login'])

  }catch(error:any){
    this.isLoading=false
    this.errorMessage=error.error
    console.log(error)
    console.log(form.value)
  }
  }

}

