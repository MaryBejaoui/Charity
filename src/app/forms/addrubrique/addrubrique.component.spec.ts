import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrubriqueComponent } from './addrubrique.component';

describe('AddrubriqueComponent', () => {
  let component: AddrubriqueComponent;
  let fixture: ComponentFixture<AddrubriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrubriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
