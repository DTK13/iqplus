import { TestBed } from '@angular/core/testing';

import { StateVerificationService } from './state-verification.service';

describe('StateVerificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateVerificationService = TestBed.get(StateVerificationService);
    expect(service).toBeTruthy();
  });
});
