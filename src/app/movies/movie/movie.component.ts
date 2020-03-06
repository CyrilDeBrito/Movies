import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() mov: Movie;
  editMode: boolean = false;
  previousDescription: string;

  @Output() onDelete: EventEmitter<Movie> = new EventEmitter();


  constructor(private service: MoviesService) { }

  ngOnInit() {
  }

  edit() {
    this.previousDescription = this.mov.description;
    this.editMode = true;
  }

  validate(): void {
    this.editMode = false;
    this.service.update(this.mov).subscribe((d => Object.assign(this.mov, d)));
  }

  cancel() {
      this.mov.description = this.previousDescription;
      this.editMode = false;
  }

  delete() {
    this.service.delete(this.mov).subscribe();
  }

}
