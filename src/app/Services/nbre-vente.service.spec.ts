import { TestBed } from '@angular/core/testing';

import { NbreVenteService } from './nbre-vente.service';

describe('NbreVenteService', () => {
  let service: NbreVenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbreVenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
