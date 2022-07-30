import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/movies/movies.service';
@Component({
  selector: 'app-create-movie-popup',
  templateUrl: './create-movie-popup.component.html',
  styleUrls: ['./create-movie-popup.component.scss']
})
export class CreateMoviePopupComponent implements OnInit {
  finalFile:any
  fileImage:any
  constructor(public _MoviesService: MoviesService) { }

  ngOnInit(): void {
  }
  upload(files: any) {
     this.fileImage = files.target.files.item(0);
  }
  ngSubmit(formValue: FormData) {
    this._MoviesService.createNewMovie(formValue).subscribe(res =>{
      console.log(res);
      
    })
  }

}
