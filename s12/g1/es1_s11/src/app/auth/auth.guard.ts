import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service';
import { map, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     |Observable<boolean | UrlTree>
     | Promise<boolean  | UrlTree>
     | boolean
     | UrlTree {
       return this.auth.user$.pipe(take(1), map((user)=>{
         if(user){
           return true
         }
         return this.route.createUrlTree(['/login'])
       }))
     }




  constructor(private auth:AuthService, private route: Router){

  }

}
