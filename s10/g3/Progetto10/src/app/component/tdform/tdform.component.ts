import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TDformComponent implements OnInit {
  poteri:string[] =['forte', 'fuoco', 'ghiaccio', 'ragno']

  constructor() { }

  ngOnInit(): void {
  }

  submit(form:NgForm){
    console.log(form.value)
  }

}
