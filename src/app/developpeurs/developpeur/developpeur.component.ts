import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Developper } from 'src/app/developper.model';
import { DeveloppeursService } from '../developpeurs.service';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.scss']
})
export class DeveloppeurComponent implements OnInit {

  @Input() dev: Developper;
  editMode: boolean = false;
  previousDescription: string;

  @Output() onDelete: EventEmitter<Developper> = new EventEmitter();


  constructor(private service: DeveloppeursService) { }

  ngOnInit() {
  }

  edit() {
    this.previousDescription = this.dev.description;
    this.editMode = true;
  }

  validate(): void {
    this.editMode = false;
    this.service.update(this.dev).subscribe((d => Object.assign(this.dev, d)));
  }

  cancel() {
      this.dev.description = this.previousDescription;
      this.editMode = false;
  }

  delete() {
    this.service.delete(this.dev).subscribe();
  }

}
