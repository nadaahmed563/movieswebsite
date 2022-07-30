import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RegisterComponent,
    RegisterFormComponent 
  ]
})
export class RegisterModule { }
