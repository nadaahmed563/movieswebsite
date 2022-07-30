import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateMoviePopupComponent } from './components/create-movie-popup/create-movie-popup.component';
import { EditMoviePopupComponent } from './components/edit-movie-popup/edit-movie-popup.component';



@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    CreateMoviePopupComponent,
    EditMoviePopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    SharedComponent,
    NavbarComponent,
    CreateMoviePopupComponent,
    EditMoviePopupComponent
  ]
})
export class SharedModule { }
