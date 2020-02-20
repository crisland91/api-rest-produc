import { TestBed } from '@angular/core/testing';

import { ProductosServicesService } from './productos-services.service';

describe('ProductosServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosServicesService = TestBed.get(ProductosServicesService);
    expect(service).toBeTruthy();
  });
});
