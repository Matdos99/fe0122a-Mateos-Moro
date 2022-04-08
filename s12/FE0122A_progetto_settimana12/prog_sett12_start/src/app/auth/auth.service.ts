
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt'
import {tap, map} from 'rxjs/operators'
import { Data, Route, Router } from '@angular/router';


export interface AuthData{
  accessToken:string,
  users:{
    "id":number,
    "email":string,
    "name":string
  }
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Jwthelper= new JwtHelperService()
  url = 'http://localhost:4201'

  private authSubj =new BehaviorSubject<null |AuthData>(null)
  user$ = this.authSubj.asObservable()
  isLoggedIn$ =this.user$.pipe(map(user=> !!user))
  timeOut:any

  constructor(private http:HttpClient, private route:Router) {
    this.restore()
   }



   login(data:{email:string, password:string}){
     return this.http.post<AuthData>(`${this.url}/login`, data).pipe(tap((data)=>{
       this.authSubj.next(data)
       console.log(data)
       localStorage.setItem('user', JSON.stringify(data))
       this.autoLogout(data)
     }), tap((data)=>{
       this.authSubj.next(data)

     }))}


   restore(){
     const user= localStorage.getItem('user')
     if(!user){
       return
     }

     const userData:AuthData= JSON.parse(user)
     this.authSubj.next(userData)

     this.autoLogout(userData)
   }

   registration(data:{name:string, email:string, password:string}){
     return this.http.post(`${this.url}/register`, data)

   }

   logout(){
     this.authSubj.next(null)
     localStorage.removeItem('user')
     this.route.navigate(['/login'])
     if(this.timeOut){
       clearTimeout(this.timeOut)
     }
   }


   autoLogout(data:AuthData){
     const scaden = this.Jwthelper.getTokenExpirationDate(data.accessToken) as Date
     const timeout= scaden.getTime() - new Date().getDate()
     this.timeOut = setTimeout(()=>{
       this.logout
     }, timeout)

   }


}
