
import { NgModule } from '@angular/core';

import { CompletedComponent } from '../completed/completed.component';
import { TodoComponent } from '../todo/todo.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[
  {path:'Fare',
component:TodoComponent},
{
  path:'Completati',
  component:CompletedComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
