import { AuthData, AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user!:AuthData|null
opened:boolean =false
isLoggedIn:boolean=false
  constructor(private authsrv:AuthService) { }

  ngOnInit(): void {
    this.authsrv.isLoggedIn$.subscribe((isLoggedIn)=>{
      this.isLoggedIn= isLoggedIn
    })
  }

  toggleSidebar(){
    this.opened= !this.opened
  }

  logout(){
    this.authsrv.logout()
  }
}
