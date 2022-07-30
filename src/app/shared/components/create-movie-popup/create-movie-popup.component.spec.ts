import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMoviePopupComponent } from './create-movie-popup.component';

describe('CreateMoviePopupComponent', () => {
  let component: CreateMoviePopupComponent;
  let fixture: ComponentFixture<CreateMoviePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMoviePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMoviePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
