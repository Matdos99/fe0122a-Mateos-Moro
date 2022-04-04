import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Foto } from './inteface/foto';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FotoService {
baseUrl= 'https://jsonplaceholder.typicode.com/photos';
sub= new Subject<number>();
counter = 0
  constructor(private http: HttpClient) { }


get(){
  return this.http.get<Foto[]>(this.baseUrl).pipe(catchError(err=>{
    return throwError(this.getErrorMess(err.status));
  }))
}

delete(id:number){
  return this.http.delete(`${this.baseUrl}/${id}`).pipe(catchError(err =>{
    return throwError(this.getErrorMess(err.status))
  }))
}

conta(){
  this.counter++
  this.sub.next(this.counter)
}

private getErrorMess(status:number){
  let mess= ''
  switch (status){
    case 404:
      mess='Risorsa non trovata';
    break;
    case 500:
      mess ='Errore interno del server'
      break;
      default:
        mess='qualcosa e andato storto'

  }
}
}
