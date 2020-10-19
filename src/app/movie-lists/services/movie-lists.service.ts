import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopRatedMovies, UpcomingMovies } from '../models/movie-lists';

@Injectable({
  providedIn: 'root'
})
export class MovieListsService {

  imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face';

  constructor(private http: HttpClient) { }

  public getImageUrl() {
    return this.imageUrl;
  }
  public getMovies(type: string, page?: number): Observable<TopRatedMovies | UpcomingMovies> {
    let url = env.baseURL + type + '?api_key=' + env.apiKey;
    if (!isNaN(page)) {
      url += '&page=' + page;
    }
    return this.http.get<TopRatedMovies>(url, {});
  }
}
