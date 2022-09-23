import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionSixComponent } from './home-section-six.component';

describe('HomeSectionSixComponent', () => {
  let component: HomeSectionSixComponent;
  let fixture: ComponentFixture<HomeSectionSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
