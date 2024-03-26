import { TestBed } from '@angular/core/testing';

import { TokenUserDetailsService } from './token-user-details.service';

describe('TokenUserDetailsService', () => {
  let service: TokenUserDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenUserDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
