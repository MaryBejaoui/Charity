import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrubriquesComponent } from './listrubriques.component';

describe('ListrubriquesComponent', () => {
  let component: ListrubriquesComponent;
  let fixture: ComponentFixture<ListrubriquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrubriquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrubriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
