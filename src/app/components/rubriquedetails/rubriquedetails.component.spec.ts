import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubriquedetailsComponent } from './rubriquedetails.component';

describe('RubriquedetailsComponent', () => {
  let component: RubriquedetailsComponent;
  let fixture: ComponentFixture<RubriquedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubriquedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubriquedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
