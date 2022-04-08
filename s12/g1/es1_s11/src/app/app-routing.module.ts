import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { AuthGuard } from './auth/auth.guard';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';

const routes:Route[]=[
  {
  path:'',
  component:HomeComponent
  },
  {
  path:'active-post',
  component:ActivePostsComponent
  },
  {
  path:'inactive-post',
  component:InactivePostsComponent
  },
  {
    path:'active-post:id',
    component:PostDetailComponent
    },
    {
    path:'inactive-post:id',
    component:PostDetailComponent
    },

  {
  path:'users',
  component:UsersComponent,
  canActivate:[AuthGuard],
  children: [
    {
      path:':id',
      component:UsersDetailsComponent
    },
    {
      path:'**',
      redirectTo:''
    }
  ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
