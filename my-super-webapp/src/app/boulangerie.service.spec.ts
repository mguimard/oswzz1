import { TestBed } from '@angular/core/testing';

import { BoulangerieService } from './boulangerie.service';

describe('BoulangerieService', () => {
  let service: BoulangerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoulangerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
