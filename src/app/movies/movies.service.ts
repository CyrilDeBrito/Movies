import { Injectable } from '@angular/core';
import { Movie } from '../movie.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl = `http://www.omdbapi.com/?apikey=b1f36987&s=inception`;

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }

  getFromId(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiUrl}/${id}`);
  }

  add(newMovie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.apiUrl, newMovie);
  }

  update(mov: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(this.apiUrl, mov);
  }

  delete(mov: Movie) {
    return this.httpClient.delete(`${this.apiUrl}/${mov.imdbID}`);
  }

}
