import { TestBed } from '@angular/core/testing';

import { CommandeFabrikService } from './commande-fabrik.service';

describe('CommandeFabrikService', () => {
  let service: CommandeFabrikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeFabrikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
