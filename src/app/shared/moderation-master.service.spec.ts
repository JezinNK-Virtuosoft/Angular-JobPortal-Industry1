import { TestBed } from '@angular/core/testing';

import { ModerationMasterService } from './moderation-master.service';

describe('ModerationMasterService', () => {
  let service: ModerationMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModerationMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
