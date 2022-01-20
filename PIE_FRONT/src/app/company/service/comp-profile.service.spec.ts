import { TestBed } from '@angular/core/testing';

import { CompProfileService } from './comp-profile.service';

describe('CompProfileService', () => {
  let service: CompProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
