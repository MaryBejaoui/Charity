import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninassociationComponent } from './signinassociation.component';

describe('SigninassociationComponent', () => {
  let component: SigninassociationComponent;
  let fixture: ComponentFixture<SigninassociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninassociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninassociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
