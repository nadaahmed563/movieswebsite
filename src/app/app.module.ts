import { MovieDetailsModule } from './movie-details/movie-details.module';
import { MoviesModule } from './movies/movies.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    LoginModule,
    RegisterModule,
    MoviesModule,
    HttpClientModule,
    MovieDetailsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
