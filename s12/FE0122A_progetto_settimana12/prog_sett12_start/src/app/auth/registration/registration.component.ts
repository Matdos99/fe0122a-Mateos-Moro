import { AuthData } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
isLoading=false
errorMessage=undefined
user!:AuthData|null
  constructor(private AuthSrv:AuthService, private route:Router) { }

  ngOnInit(): void {

  }

  async registration(form:NgForm){
    this.isLoading=true
    try{
      this.isLoading=false
      await this.AuthSrv.registration(form.value).toPromise()
      form.reset
      this.route.navigate(['/login'])
    }catch(error:any){
      console.log(error)
      this.errorMessage=error.error

      this.isLoading=false
    }

  }

}
