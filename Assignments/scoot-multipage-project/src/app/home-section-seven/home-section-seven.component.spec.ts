import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionSevenComponent } from './home-section-seven.component';

describe('HomeSectionSevenComponent', () => {
  let component: HomeSectionSevenComponent;
  let fixture: ComponentFixture<HomeSectionSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectionSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
