import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user!:Login
  isLoadingIn:boolean=false

  constructor(private authSrv: AuthService) {
    this.authSrv.isLoggedIn$.subscribe(isLoadingIn=>{this.isLoadingIn=isLoadingIn})
   }

  ngOnInit(): void {
  }

  logout(){
    this.authSrv.logout()
  }

}
