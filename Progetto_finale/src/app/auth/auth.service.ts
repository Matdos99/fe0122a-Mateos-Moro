
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, Route, RouterModule } from '@angular/router';
import { tap, map } from 'rxjs/operators';


export interface Login{
  accessToken:string
  tenant:string
user:{"username":string,
  "password":string}
}

export interface Signup{
  username:string,
  email:string,
  password:string,
  role:[string]
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  JwtHelper= new JwtHelperService()
  private AuthSubj= new BehaviorSubject <null|Login>(null)
  user$= this.AuthSubj.asObservable()
  isLoggedIn$ =this.user$.pipe(map(user=> !!user))
  timeOut:any

  url='http://epicode.online/epicodebeservice_v2'

  constructor(private http:HttpClient, private route:Router) {
    this.restore()
   }

  login(data:{username:string, password:string}){
    return this.http.post<Login>(`${this.url}/api/auth/login`, data).pipe(tap((data)=>{
    this.AuthSubj.next(data)
    console.log(data)
    localStorage.setItem('user',JSON.stringify(data))
    }), tap((data)=>{
      this.AuthSubj.next(data)})
    )

    }

  signup(data:any){
    return this.http.post<Signup>(`${this.url}/api/auth/signup`, data)
  }

  restore(){
    const user=localStorage.getItem('user')
    if(!user){
      return
    }
    const userData:Login= JSON.parse(user)
    this.AuthSubj.next(userData)
  }

  logout(){
    this.AuthSubj.next(null)
    localStorage.removeItem('user')
    this.route.navigate(['/login'])
    if(this.timeOut){
      clearTimeout(this.timeOut)
    }
  }

}


