import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule, } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from "@angular/material/button"
import { SidebarModule } from 'ng-sidebar';
import { MatOptionModule } from '@angular/material/core';
import { UserComponent } from './component/user/user.component';
import {MatGridListModule} from '@angular/material/grid-list'
import { TokenInterceptor } from './auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SidebarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    SidebarModule,
    MatGridListModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
