import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from '../movies.service';
import {switchMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((params) => params.get('imdbID')),
        switchMap((id: string) => this.service.getFromId(id))
      )
      .subscribe((mov: Movie) => (this.movie = mov));
  }

}
