import { AuthData, AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
user!: AuthData| null


  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((users)=>{
      this.user=users
    })
  }

  logout(){
    this.authSrv.logout()
  }

}
