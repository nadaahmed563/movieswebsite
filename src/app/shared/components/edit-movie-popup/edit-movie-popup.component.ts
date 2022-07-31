import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/movies/movies.service';

@Component({
  selector: 'app-edit-movie-popup',
  templateUrl: './edit-movie-popup.component.html',
  styleUrls: ['./edit-movie-popup.component.scss']
})
export class EditMoviePopupComponent implements OnInit {
  movieDetail: any

  constructor(public _MoviesService: MoviesService) { }

  ngOnInit(): void {
  }
  editForm(formData: any) {
    let data = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
      category_id: formData.category_id,
      _method: 'put'
    }
    this._MoviesService.editMovie(data, this._MoviesService.movieDetail.id).subscribe((res: any) => {
      if (res.status == 'success') {
        this._MoviesService.getMovies()
      }
    })
  }

}
