import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountService } from '../user/account.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesList:any;
  movieDetail:any;

  constructor(private _http: HttpClient, public _AccountService: AccountService) { }
  getAllMovies() {
    return this._http.get(`${environment.apiUrl}/api/movies`, {
      headers: {
        'Authorization': `Bearer ${this._AccountService.userValue.authorisation.token}`
      }
    })
  }
  getAllCategories() {
    return this._http.get(`${environment.apiUrl}/api/category`, {
      headers: {
        'Authorization': `Bearer ${this._AccountService.userValue.authorisation.token}`
      }
    })
  }
  getMovieDetails(movieId:any) {
    return this._http.get(`${environment.apiUrl}/api/movies/${movieId}`, {
      headers: {
        'Authorization': `Bearer ${this._AccountService.userValue.authorisation.token}`
      }
    })
  }
  createNewMovie(data: Object) {
    return this._http.post(`${environment.apiUrl}/api/movies`, data, {
      headers: {
        'Authorization': `Bearer ${this._AccountService.userValue.authorisation.token}`
      }
    })
  }
  deleteMovie(data: Object, movieId: any) {
    return this._http.post(`${environment.apiUrl}/api/movies/${movieId}`, data, {
      headers: {
        'Authorization': `Bearer ${this._AccountService.userValue.authorisation.token}`
      }
    })
  }
  editMovie(data: Object, movieId: any) {
    return this._http.post(`${environment.apiUrl}/api/movies/${movieId}`, data, {
      headers: {
        'Authorization': `Bearer ${this._AccountService.userValue.authorisation.token}`
      }
    })
  }
  moviesByCategories(categoryId: any) {
    return this._http.get(`${environment.apiUrl}/api/moviesByCategory/${categoryId}`, {
      headers: {
        'Authorization': `Bearer ${this._AccountService.userValue.authorisation.token}`
      }
    })
  }

  // get all movies method
  getMovies() {
    this.getAllMovies().subscribe((res: any) => {
      this.moviesList = res.message
    })
  }
  // get movie details method
  movieDetails(data: any) {
    this.getMovieDetails(data.id).subscribe((res: any) => {
      this.movieDetail = res.message
      console.log(this.movieDetail);
    })
  }
}
