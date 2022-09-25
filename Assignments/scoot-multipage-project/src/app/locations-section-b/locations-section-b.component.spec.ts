import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSectionBComponent } from './locations-section-b.component';

describe('LocationsSectionBComponent', () => {
  let component: LocationsSectionBComponent;
  let fixture: ComponentFixture<LocationsSectionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsSectionBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsSectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
