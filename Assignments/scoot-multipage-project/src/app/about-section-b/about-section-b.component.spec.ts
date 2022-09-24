import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionBComponent } from './about-section-b.component';

describe('AboutSectionBComponent', () => {
  let component: AboutSectionBComponent;
  let fixture: ComponentFixture<AboutSectionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSectionBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
