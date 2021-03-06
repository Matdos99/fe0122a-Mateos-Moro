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
export interface filmFavourite{

    "movieId": number,
    "userId": number,
    "id": number
  }




@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmDat =new BehaviorSubject<null |filmData>(null)
  film$ = this.filmDat.asObservable()

  film!:AuthData[]
  filmFav!:filmFavourite[]


  url='http://localhost:4201'




  constructor(private http:HttpClient, private auths:AuthService) { }
  ngOnInit(): void {


  }

  getAll(){
    return this.auths.user$.pipe(switchMap(user=>{
      return this.http.get<any>(`${this.url}/movie/popular`, {headers:new HttpHeaders({
        "Authorization":`Bearer ${user?.accessToken}`
      })})
    }))


  }

  addFavourite(user:any){

      return this.http.post(`${this.url}/favorites`, user).pipe(tap((user:any)=>{
        this.filmDat.next(user)
      }))}


  deleteFavorite(user:any){
    return this.http.delete(`${this.url}/favorites`, user).pipe(map((user:any)=>{
      this.filmDat.next(user)

  }))}


}


