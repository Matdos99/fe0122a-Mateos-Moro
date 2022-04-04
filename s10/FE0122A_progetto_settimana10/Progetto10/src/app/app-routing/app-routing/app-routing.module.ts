import { CarrelloComponent } from './../../component/carrello/carrello.component';
import { HomeComponent } from './../../component/home/home.component';
import { DetailsComponent } from 'src/app/component/details/details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes=[
  {
    path:"home",
    component: HomeComponent
  },{
  path:"carrello",
  component:CarrelloComponent

},
{
  path:"detail",
  component:DetailsComponent
}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
