import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthData } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading=false
user!:AuthData|null

  constructor(private AuthSrv: AuthService, private route:Router) { }

  ngOnInit(): void {
this.AuthSrv.user$.subscribe(data=> this.user=data)
  }

  async login(form:NgForm){
    this.isLoading=true
    try{
      this.isLoading=false
      await this.AuthSrv.login(form.value).toPromise()
      console.log(form)
      this.route.navigate(['/home'])
    }
    catch(error){
      this.isLoading=false
      console.log(form.value)
      form.reset()
    }
  }

}
