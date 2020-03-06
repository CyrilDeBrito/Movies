import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeursListComponent } from './developpeurs-list.component';

describe('DeveloppeursListComponent', () => {
  let component: DeveloppeursListComponent;
  let fixture: ComponentFixture<DeveloppeursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloppeursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloppeursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
