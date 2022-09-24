import { TestBed } from '@angular/core/testing';

import { AboutSectionEService } from './about-section-e.service';

describe('AboutSectionEService', () => {
  let service: AboutSectionEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutSectionEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
