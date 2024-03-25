import { TestBed } from '@angular/core/testing';

import { UsertypeMasterService } from './usertype-master.service';

describe('UsertypeMasterService', () => {
  let service: UsertypeMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsertypeMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
