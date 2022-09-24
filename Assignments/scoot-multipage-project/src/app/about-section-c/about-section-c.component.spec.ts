import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionCComponent } from './about-section-c.component';

describe('AboutSectionCComponent', () => {
  let component: AboutSectionCComponent;
  let fixture: ComponentFixture<AboutSectionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSectionCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
