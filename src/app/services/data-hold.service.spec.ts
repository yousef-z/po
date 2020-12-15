import { TestBed } from '@angular/core/testing';

import { DataHoldService } from './data-hold.service';

describe('DataHoldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHoldService = TestBed.get(DataHoldService);
    expect(service).toBeTruthy();
  });
});
