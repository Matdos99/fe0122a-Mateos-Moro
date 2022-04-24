import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { TokenInterceptor } from './auth/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { ClientComponent } from './component/client/client.component';
import { PageNotFoundedComponent } from './component/page-not-founded/page-not-founded.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NewClientComponent } from './component/new-client/new-client.component';
import { MatSelectModule } from '@angular/material/select';
import { BillsComponent } from './component/bills/bills.component';
import { AllBillsComponent } from './component/all-bills/all-bills.component';
import { AddBillsComponent } from './component/add-bills/add-bills.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,

    ClientComponent,
    PageNotFoundedComponent,
    NewClientComponent,
    BillsComponent,
    AllBillsComponent,
    AddBillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  providers:[
  {provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptor,
multi:true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
