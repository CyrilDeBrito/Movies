import {Component, OnInit} from '@angular/core';
import { DeveloppeursService } from '../developpeurs.service';
import { Developper } from 'src/app/developper.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-developpeurs-list',
  templateUrl: './developpeurs-list.component.html',
  styleUrls: ['./developpeurs-list.component.scss']
})
export class DeveloppeursListComponent implements OnInit  {

  addMode: boolean = false;
  newDev: Developper = new Developper();
  developpeurs: Developper[];

  constructor(private service: DeveloppeursService, private  location: Location) {
  }

  ngOnInit() {
    this.service.get().subscribe((result) => {
      this.developpeurs = result;
    });
  }

  switchToAddMode() {
    this.newDev = new Developper();
    this.addMode = true;
  }

  add() {
    this.service.add(this.newDev).subscribe(dev => this.developpeurs.push(dev));
    this.addMode = false;
  }

  cancel() {
    this.addMode = false;
  }

  back() {
    this.location.back();
  }

}
