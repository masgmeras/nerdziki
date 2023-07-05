import { TestBed } from '@angular/core/testing';

import { ListaGazetekService } from './lista-gazetek.service';

describe('ListaGazetekService', () => {
  let service: ListaGazetekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaGazetekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
