import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { CategoriesFilterComponent } from './components/categories-filter/categories-filter.component';



@NgModule({
  declarations: [
    MoviesComponent,
    CategoriesFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  exports: [
    MoviesComponent,
    CategoriesFilterComponent
  ]
})
export class MoviesModule { }
