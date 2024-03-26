import { TestBed } from '@angular/core/testing';

import { TokenAdminDetailsService } from './token-admin-details.service';

describe('TokenAdminDetailsService', () => {
  let service: TokenAdminDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenAdminDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
