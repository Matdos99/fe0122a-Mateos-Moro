import { AuthData, AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!:AuthData|any

  constructor(private authsrv:AuthService) { }

  ngOnInit(): void {
    this.authsrv.user$.subscribe((user)=>{
      this.user=user
    console.log(this.user)})

  }

  ngOnChecked(){
    console.log(this.user)
  }

}
