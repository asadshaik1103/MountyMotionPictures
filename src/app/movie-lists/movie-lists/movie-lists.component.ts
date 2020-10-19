import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.scss']
})
export class MovieListsComponent implements OnInit {

  selectedTab;
  
  constructor() { }
  title = 'Mounty Motion Pictures'
  ngOnInit(): void {
  }

  topMoviesLabel = 'Top Rate Movies';
  upcomingMoviesLabel = 'Upcoming Movies';
  tabSelectionChanged(event) {
    this.selectedTab = event.index;
  }

}
