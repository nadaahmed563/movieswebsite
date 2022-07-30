import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './core/helpers/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movies', canActivate: [AuthGuard] , component: MoviesComponent },
  { path: 'movie-details/:id', canActivate: [AuthGuard] , component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
