import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Task } from '../models/Task';
import { CompletedComponent } from '../completed/completed.component';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
completed: boolean= false
  taskList:Task[]=[]
newTodoForm = this.formBuilder.group({todoItem: ''})

  constructor(
    private formBuilder: FormBuilder
    ) {}

   addTask(){
     const value=this.newTodoForm.value.todoItem
     this.taskList.push({id:this.taskList.length, title:value, completed:true})
     console.log(this.taskList)
   }

  ngOnInit(): void {
  }


  markDone(value: any) {
      value.completed = !value.completed
      value.completed === true ?
        this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
        this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
        console.log(this.taskList)
    }
    removeTask(i: any) {
      this.taskList.splice(i, 1)
      window.localStorage.setItem('task', JSON.stringify(this.taskList))

    }



}
