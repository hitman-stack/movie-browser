import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseURL = 'http://www.omdbapi.com/?apikey=fec9f024';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<any>
  {
return this.http.get(baseURL, {params : {s : searchTerm}});
  }

  getMovieDetaisl(imdbId: string): Observable<any>
  {
    return this.http.get(baseURL, {params : {i : imdbId}});
  }
}
