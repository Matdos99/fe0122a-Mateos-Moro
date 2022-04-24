import { AllBillsComponent } from './component/all-bills/all-bills.component';
import { BillsComponent } from './component/bills/bills.component';
import { NewClientComponent } from './component/new-client/new-client.component';
import { ClientComponent } from './component/client/client.component';
import { PageNotFoundedComponent } from './component/page-not-founded/page-not-founded.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, ExtraOptions } from '@angular/router';
import { AddBillsComponent } from './component/add-bills/add-bills.component';

const routes: Routes = [

{
   path:"home",
   component:HomeComponent ,
   canActivate:[AuthGuard]
},{
   path:"client",
   component:ClientComponent ,
   canActivate:[AuthGuard]
},{
  path:'new-client/:id',
  component:NewClientComponent,
  canActivate:[AuthGuard]
},{
  path:'new-client',
  component:NewClientComponent,
  canActivate:[AuthGuard]

},{
  path:'fatture',
  component:AllBillsComponent,
  canActivate:[AuthGuard]
},{
  path:'fatture/:id',
  component:BillsComponent,
  canActivate:[AuthGuard]
},{
  path:'new-bill/:id',
  component:AddBillsComponent,
  canActivate:[AuthGuard]
},{
  path:'new-bill',
  component:AddBillsComponent,
  canActivate:[AuthGuard]
},{
  path:'**',
  component:PageNotFoundedComponent
}
];

const optionrouting: ExtraOptions = {
  onSameUrlNavigation: 'reload'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, optionrouting),  AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
