import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from 'src/app/core/movies/movies.service';
@Component({
  selector: 'app-create-movie-popup',
  templateUrl: './create-movie-popup.component.html',
  styleUrls: ['./create-movie-popup.component.scss']
})
export class CreateMoviePopupComponent implements OnInit {
  fileToUpload: any;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('category_id') category_id!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  constructor(public _MoviesService: MoviesService) { }
  ngOnInit(): void {
  }
  onFileChanged(event:any) {
    this.fileToUpload = event.target.files[0];
  }
  onUpload() {
    const formData = new FormData();
    formData.append('image', this.fileToUpload);
    formData.set('name', this.name.nativeElement.value);
    formData.set('description', this.description.nativeElement.value);
    formData.set('category_id', this.category_id.nativeElement.value);
    console.log(this.name.nativeElement.value);
    this._MoviesService.createNewMovie(formData).subscribe((res:any) => {
      console.log(res);
      
      if (res.status == 'success') {
        this._MoviesService.getMovies()
      }
    })
    
  }

}



