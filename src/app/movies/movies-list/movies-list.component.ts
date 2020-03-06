import {Component, OnInit} from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from 'src/app/movie.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-Movies-list',
  templateUrl: './Movies-list.component.html',
  styleUrls: ['./Movies-list.component.scss']
})
export class MoviesListComponent implements OnInit  {

  addMode: boolean = false;
  newMov: Movie = new Movie();
  movies: Movie[];

  constructor(private service: MoviesService, private  location: Location) {
  }

  ngOnInit() {
    this.service.get().subscribe((result) => {
      console.log(result);
      this.movies = result.Search;
      console.log(this.movies);
    });
  }

  switchToAddMode() {
    this.newMov = new Movie();
    this.addMode = true;
  }

  add() {
    this.service.add(this.newMov).subscribe(mov => this.Movies.push(mov));
    this.addMode = false;
  }

  cancel() {
    this.addMode = false;
  }

  back() {
    this.location.back();
  }

}
