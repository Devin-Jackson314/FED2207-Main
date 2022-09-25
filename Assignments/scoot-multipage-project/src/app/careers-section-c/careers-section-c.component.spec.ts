import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersSectionCComponent } from './careers-section-c.component';

describe('CareersSectionCComponent', () => {
  let component: CareersSectionCComponent;
  let fixture: ComponentFixture<CareersSectionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersSectionCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersSectionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
