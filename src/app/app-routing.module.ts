import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeveloppeursListComponent } from './developpeurs/developpeurs-list/developpeurs-list.component';
import { HomeComponent } from './home/home.component';
import { DeveloppeurDetailComponent } from './developpeurs/developpeur-detail/developpeur-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
