import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersSectionBComponent } from './careers-section-b.component';

describe('CareersSectionBComponent', () => {
  let component: CareersSectionBComponent;
  let fixture: ComponentFixture<CareersSectionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersSectionBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersSectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
