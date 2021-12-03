import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignindonnateurComponent } from './signindonnateur.component';

describe('SignindonnateurComponent', () => {
  let component: SignindonnateurComponent;
  let fixture: ComponentFixture<SignindonnateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignindonnateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignindonnateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
