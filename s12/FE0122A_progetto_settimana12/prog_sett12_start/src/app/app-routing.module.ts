import { HomeComponent } from './component/home/home.component';
import { AuthService, AuthData } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';


const routes: Routes = [{
  path:"home",
  component:HomeComponent
},
{
  path:"user",
  component:UserComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
