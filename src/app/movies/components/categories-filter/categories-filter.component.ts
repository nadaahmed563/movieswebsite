import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from 'src/app/core/movies/movies.service';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss']
})
export class CategoriesFilterComponent implements OnInit {
  @Input() title!: any
  @Input() data: any[] = []
  @Output() selectedValue = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  detectChanges(event: any) {
    this.selectedValue.emit(event)
  }


}
