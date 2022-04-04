import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './components/post-non-attivi/post-non-attivi.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MaiuscoloPipe } from './pipe/maiuscolo.pipe';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'attivi',
    component: PostAttiviComponent,
  },
  {
    path: 'non-attivi',
    component: PostNonAttiviComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostAttiviComponent,
    PostNonAttiviComponent,
    PostCardComponent,
    HighlightDirective,
    MaiuscoloPipe,
    UsersComponent,
    UsersDetailsComponent,
    PostDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
