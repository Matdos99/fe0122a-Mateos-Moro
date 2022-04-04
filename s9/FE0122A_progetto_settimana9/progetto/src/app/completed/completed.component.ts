import { Task } from './../models/Task';
import { Component, OnInit } from '@angular/core';

import { leggi } from '../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})


export class CompletedComponent implements OnInit{
taskList!:Task[]

  constructor() {
    leggi().then((task)=> {
      //this.taskList= task
    })
   }

  ngOnInit(): void {

  }

}

