import { TestBed } from '@angular/core/testing';

import { FabrikService } from './fabrik.service';

describe('FabrikService', () => {
  let service: FabrikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabrikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
