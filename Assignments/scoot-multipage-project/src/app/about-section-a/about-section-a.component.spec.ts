import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionAComponent } from './about-section-a.component';

describe('AboutSectionAComponent', () => {
  let component: AboutSectionAComponent;
  let fixture: ComponentFixture<AboutSectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSectionAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
