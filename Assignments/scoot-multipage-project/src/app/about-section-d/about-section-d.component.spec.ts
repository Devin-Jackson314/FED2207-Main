import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionDComponent } from './about-section-d.component';

describe('AboutSectionDComponent', () => {
  let component: AboutSectionDComponent;
  let fixture: ComponentFixture<AboutSectionDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSectionDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
