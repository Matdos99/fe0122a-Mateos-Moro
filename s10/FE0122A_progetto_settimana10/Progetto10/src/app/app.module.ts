
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { HomeComponent } from './component/home/home.component';
import { DetailsComponent } from './component/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrelloComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
