import { AuthService, AuthData } from './auth/auth.service';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

export interface filmData{
      "id": number,
      "poster_path": string,
      "release_date": string,
      "title": string,
      "vote_average": number
    }


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  film!:AuthData[]


  url='http://localhost:4201'



  constructor(private http:HttpClient, private auths:AuthService) { }
  ngOnInit(): void {


  }

  getAll(){
    return this.auths.user$.pipe(switchMap(user=>{
      return this.http.get<any>(`${this.url}/moviesPopular`, {headers:new HttpHeaders({
        "Authorization":`Bearer ${user?.accessToken}`
      })})
    }))


  }

  addFavourite(){

  }
}
