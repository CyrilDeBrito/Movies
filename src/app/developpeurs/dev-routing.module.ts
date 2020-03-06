import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeveloppeursListComponent} from './developpeurs-list/developpeurs-list.component';
import {DeveloppeurDetailComponent} from './developpeur-detail/developpeur-detail.component';

const routes: Routes = [
  { path: 'developpers', component: DeveloppeursListComponent },
  { path: 'developpers/:id', component: DeveloppeurDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
