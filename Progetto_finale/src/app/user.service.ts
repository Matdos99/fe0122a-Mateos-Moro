import { bill } from 'src/app/model/Bills';
import { Provincia } from './model/Provincia';
import { Comune } from './model/Comune';
import { map, Observable, switchMap, catchError, throwError, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserData, Client, ClientData } from './model/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://epicode.online/epicodebeservice_v2'



  constructor(private http:HttpClient, private authSrv:AuthService) {

   }

  getUser(page:number, size:number):Observable<UserData>{
    let params= new HttpParams()
    params= params.append('page', String(page))
    params= params.append('size', String(size))
      return this.http.get<any>(`${this.url}/api/users`, {params}).pipe(map((UserData:UserData)=> UserData), catchError(error=> throwError(error)))
}

getClient(page:number, size:number/*, sort:{id:number, ASC:string}*/):Observable<UserData>{
  let params= new HttpParams()
  params= params.append('page', String(page))
  params= params.append('size', String(size))
  //params= params.append('sort', String(sort))
    return this.http.get<any>(`${this.url}/api/clienti`, {params}).pipe(map((UserData:UserData)=> UserData), catchError(error=> throwError(error)))
}

getOneClientData(id:number):Observable<Client>{
return this.http.get(`${this.url}/api/clienti/`+id)
}
getTypeClient():Observable<any>{
  return this.http.get<any>(`${this.url}/api/clienti/tipiclienti`).pipe(map((data:any)=> data), catchError(error=> throwError(error)))
}

getComuni(){
  return this.http.get<any>(`${this.url}/api/comuni`).pipe(map((comuni:Comune)=> comuni), catchError(error=> throwError(error)))
}

getProvincia(){
  return this.http.get<any>(`${this.url}/api/province`).pipe(map((provincia:Provincia)=> provincia), catchError(error=> throwError(error)))
}


Client(id:number, item:any){
  if(id){
    return this.http.put<any>(`${this.url}/api/clienti/`+id, item)
  }else{
    return this.http.post<any>(`${this.url}/api/clienti`, item)
  }

}

getBill(id:number, page:number, size:number){
  let params= new HttpParams()
  params= params.append('page', String(page))
  params= params.append('size', String(size))
  return this.http.get<any>(`${this.url}/api/fatture/cliente/`+ id, {params}).pipe(map((UserData:UserData)=> UserData), catchError(error=> throwError(error)))
}

updateBill(id:number){
  return this.http.get<any>(`${this.url}/api/fatture/`+ id)
}

getallBill(page:number, size:number){
  let params= new HttpParams()
  params= params.append('page', String(page))
  params= params.append('size', String(size))
  return this.http.get<any>(`${this.url}/api/fatture`, {params}).pipe(map((UserData:UserData)=> UserData), catchError(error=> throwError(error)))
}

Bills(id:number, item:any){
  if(id){
    return this.http.put<Client>(`${this.url}/api/fatture/`+id, item)
  }else{
    return this.http.post<Client>(`${this.url}/api/fatture`, item)
  }
}

deleteClient(id:number):Observable<UserData>{
  return this.http.delete(`${this.url}/api/clienti/` + id)

}

deleteClientBill(id:number){
return this.http.delete(`${this.url}/api/fatture/` + id)
}

}


