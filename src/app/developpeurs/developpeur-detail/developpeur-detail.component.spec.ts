import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurDetailComponent } from './developpeur-detail.component';

describe('DeveloppeurDetailComponent', () => {
  let component: DeveloppeurDetailComponent;
  let fixture: ComponentFixture<DeveloppeurDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloppeurDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloppeurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
