import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MoviesService } from '../core/movies/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  apiUrl: any = environment.apiUrl
  movieDetail:any;

  constructor(public _MoviesService: MoviesService , public _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieDetails()
  }
  // get movie details method
  movieDetails(){
    this._MoviesService.getMovieDetails(`${+this._ActivatedRoute.snapshot.url[1].path}`).subscribe((res:any)=>{
      this.movieDetail = res.message
    })
  }


}


