import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoviePopupComponent } from './edit-movie-popup.component';

describe('EditMoviePopupComponent', () => {
  let component: EditMoviePopupComponent;
  let fixture: ComponentFixture<EditMoviePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMoviePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoviePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
