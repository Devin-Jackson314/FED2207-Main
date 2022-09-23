import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionFiveComponent } from './home-section-five.component';

describe('HomeSectionFiveComponent', () => {
  let component: HomeSectionFiveComponent;
  let fixture: ComponentFixture<HomeSectionFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
