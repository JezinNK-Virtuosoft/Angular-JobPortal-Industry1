import { TestBed } from '@angular/core/testing';

import { UserRegistrationDetailsService } from './user-registration-details.service';

describe('UserRegistrationDetailsService', () => {
  let service: UserRegistrationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
