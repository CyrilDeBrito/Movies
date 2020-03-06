import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class DeveloppeurComponent implements OnInit {

  @Input() dev: Movie;
  editMode: boolean = false;
  previousDescription: string;

  @Output() onDelete: EventEmitter<Movie> = new EventEmitter();


  constructor(private service: MoviesService) { }

  ngOnInit() {
  }

  edit() {
    this.previousDescription = this.dev.description;
    this.editMode = true;
  }

  validate(): void {
    this.editMode = false;
    this.service.update(this.dev).subscribe((d => Object.assign(this.mov, d)));
  }

  cancel() {
      this.mov.description = this.previousDescription;
      this.editMode = false;
  }

  delete() {
    this.service.delete(this.mov).subscribe();
  }

}
