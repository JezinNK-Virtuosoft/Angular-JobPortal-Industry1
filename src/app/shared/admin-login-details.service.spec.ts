import { TestBed } from '@angular/core/testing';

import { AdminLoginDetailsService } from './admin-login-details.service';

describe('AdminLoginDetailsService', () => {
  let service: AdminLoginDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLoginDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
