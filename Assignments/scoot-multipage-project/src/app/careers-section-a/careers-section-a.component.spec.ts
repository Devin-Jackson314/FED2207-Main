import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersSectionAComponent } from './careers-section-a.component';

describe('CareersSectionAComponent', () => {
  let component: CareersSectionAComponent;
  let fixture: ComponentFixture<CareersSectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersSectionAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
