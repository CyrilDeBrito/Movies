import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Developper } from 'src/app/developper.model';
import { DeveloppeursService } from '../developpeurs.service';
import {switchMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-developpeur-detail',
  templateUrl: './developpeur-detail.component.html',
  styleUrls: ['./developpeur-detail.component.scss']
})
export class DeveloppeurDetailComponent implements OnInit {

  developper: Developper;

  constructor(private service: DeveloppeursService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.service.getFromId(params.id).subscribe((dev) => this.developper = dev);
    // });
    // EQUIVAUT A :
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id: string) => this.service.getFromId(id))
      )
      .subscribe((dev: Developper) => (this.developper = dev));
  }

}
