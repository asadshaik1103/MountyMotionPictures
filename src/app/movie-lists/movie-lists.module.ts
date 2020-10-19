import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { RouterModule } from '@angular/router';
import { MovieListsComponent } from './movie-lists/movie-lists.component';
import { MaterialModule } from '../material/material.module';


const routes = [
  { path: '', component: MovieListsComponent },
  { path: 'upcoming-movies', component: UpcomingMoviesComponent }
];

@NgModule({
  declarations: [TopRatedMoviesComponent, UpcomingMoviesComponent, MovieListsComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    CommonModule
  ]
})
export class MovieListsModule { }
