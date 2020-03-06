import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { MatSidenavModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { MovieCreationDatePipe } from './movies.pipe';
import {MovRoutingModule} from './mov-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [MoviesListComponent, MovieComponent, MovieDetailComponent, MovieCreationDatePipe],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MovRoutingModule
  ],
  exports: [MoviesListComponent]
})
export class MoviesModule { }
