import { TodoService } from './../todo.service';
import { Task } from './../models/Task';
import { Component, OnInit } from '@angular/core';

import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})


export class CompletedComponent implements OnInit {
taskList:Task[]= []

  constructor(private todoService: TodoService) { }

getTask():void{
  this.todoService= this.todoService
}

  ngOnInit(){}

}
