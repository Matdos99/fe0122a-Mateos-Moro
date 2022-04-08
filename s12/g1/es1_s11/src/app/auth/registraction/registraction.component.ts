import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registraction',
  templateUrl: './registraction.component.html',
  styleUrls: ['./registraction.component.scss'],
})


export class RegistractionComponent implements OnInit {
isLoading:boolean=false
  constructor(private AuthSrv:AuthService, private route:Router) { }

  ngOnInit(): void {

  }

async onsubmit(form:NgForm){
  this.isLoading=true
  try{
    await this.AuthSrv.registraction(form.value).toPromise()
    this.route.navigate(['/login'])
    this.isLoading=false
  }
  catch (error){
    console.log(error)
    form.reset()
    this.isLoading=false

  }
}

}
