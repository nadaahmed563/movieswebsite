import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';



@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    MovieDetailsComponent
  ]
})
export class MovieDetailsModule { }
