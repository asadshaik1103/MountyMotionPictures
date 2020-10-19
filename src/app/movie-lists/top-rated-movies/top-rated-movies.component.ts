import { Component, Input, OnInit } from '@angular/core';
import { Results, TopRatedMovies, UpcomingMovies } from '../models/movie-lists';
import { MovieListsService } from '../services/movie-lists.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {

  imageUrl;
  movieListResults: Results[];
  page: number = 1

  constructor(private movieListsService: MovieListsService) { }

  ngOnInit(): void {
    this.movieListsService.getMovies('top_rated', this.page).subscribe(
      (data: TopRatedMovies) => {
        this.movieListResults = data.results;
        this.page += 1;
      }
    );

    this.imageUrl = this.movieListsService.getImageUrl();
  }

  loadMore() {
    this.movieListsService.getMovies('top_rated', this.page).subscribe(
      (data: TopRatedMovies) => {
        this.movieListResults.push(...data.results);
      }
    );
  }

}
