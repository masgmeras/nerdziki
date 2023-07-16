import { TestBed } from '@angular/core/testing';

import { LeafletsService } from './leaflets.service';

describe('ListaGazetekService', () => {
  let service: LeafletsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeafletsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
