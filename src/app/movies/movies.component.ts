import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/movies/movies.service';
import { AccountService } from '../core/user/account.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  layerAddDisplay: boolean = false
  apiUrl: any = environment.apiUrl;
  allCategories: any;

  constructor(public _MoviesService: MoviesService, public _AccountService: AccountService) { }

  ngOnInit(): void {    
    this._MoviesService.getMovies();
    this.getAllCategories() ;    
  }
  deleteMovie(movieDetails:any){
    let data = {
      name:movieDetails.name,
      description: movieDetails.description,
      image: movieDetails.image,
      category_id: movieDetails.category_id,
      _method:'delete'
    }
     this._MoviesService.deleteMovie(data,movieDetails.id).subscribe((res:any)=>{
       if (res.status == 'success'){
         this._MoviesService.getMovies()
       }
     })
  }
  getAllCategories() {
    this._MoviesService.getAllCategories().subscribe((res: any) => {
      this.allCategories = res.message
    })
  }
  filterCategory(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this._MoviesService.getMovies();
    } else {
      this.getProductsCategory(value)
    }
  }
  getProductsCategory(category: any) {
    this._MoviesService.moviesByCategories(`${+category}`).subscribe((res: any) => {
      this._MoviesService.moviesList = res.message
    })
  }

 
}
