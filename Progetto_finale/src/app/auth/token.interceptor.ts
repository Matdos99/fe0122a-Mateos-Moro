import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token:string;
  tenant:string;


  constructor(/*private AuthSrv: AuthService*/) {
    this.token=environment.adminToken;
    this.tenant=environment.adminTenant;

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    /*return this.AuthSrv.user$.pipe(take(1), switchMap(user=>{
      if(user){
        return next.handle(request)

      }else{
        console.log(request)
      }*/

      const newReq= request.clone({
        headers: request.headers.set('Authorization', `Bearer `+this.token).set('X-TENANT-ID', this.tenant)
      })
      return next.handle(newReq)
    }//));
  }
//}

