import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSectionAComponent } from './locations-section-a.component';

describe('LocationsSectionAComponent', () => {
  let component: LocationsSectionAComponent;
  let fixture: ComponentFixture<LocationsSectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsSectionAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
