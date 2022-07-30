import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
