import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloppeursListComponent } from './developpeurs-list/developpeurs-list.component';
import { DeveloppeurComponent } from './developpeur/movie.component';
import { MatSidenavModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DeveloppeurDetailComponent } from './developpeur-detail/developpeur-detail.component';
import { RouterModule } from '@angular/router';
import { DeveloppeurCreationDatePipe } from './developpeurs.pipe';
import {DevRoutingModule} from './dev-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [DeveloppeursListComponent, DeveloppeurComponent, DeveloppeurDetailComponent, DeveloppeurCreationDatePipe],
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
export class DeveloppeursModule { }
