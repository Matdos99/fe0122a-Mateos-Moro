import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TDformComponent } from './component/tdform/tdform.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TDformComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
