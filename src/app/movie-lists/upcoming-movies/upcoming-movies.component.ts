import { Component, Input, OnInit } from '@angular/core';
import { Results, UpcomingMovies } from '../models/movie-lists';
import { MovieListsService } from '../services/movie-lists.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {

  movieList: Results[];
  imageUrl;
  page: number = 1;
  selectedTabIndex;
  @Input() set selectedTab(value) {
    this.selectedTabIndex = value;
    if (value == 1 && !this.movieList) {
      this.loadMore();
    }
  }
  constructor(private movieListsService: MovieListsService) { }

  ngOnInit(): void {
    this.imageUrl = this.movieListsService.getImageUrl();
  }


  loadMore() {
    this.movieListsService.getMovies('upcoming', this.page).subscribe(
      (data: UpcomingMovies) => {
        if (this.movieList) {
          this.movieList.push(...data.results);
        } else {
          this.movieList = data.results;
        }
        this.page += 1;
      }
    );
  }
}
