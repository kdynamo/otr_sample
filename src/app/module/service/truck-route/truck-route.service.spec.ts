import { TestBed, inject } from '@angular/core/testing';

import { TruckRouteService } from './truck-route.service';

describe('TruckRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TruckRouteService]
    });
  });

  it('should be created', inject([TruckRouteService], (service: TruckRouteService) => {
    expect(service).toBeTruthy();
  }));
});
