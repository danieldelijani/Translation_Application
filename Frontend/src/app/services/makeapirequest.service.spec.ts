import { TestBed } from '@angular/core/testing';

import { MakeapirequestService } from './makeapirequest.service';

describe('MakeapirequestService', () => {
  let service: MakeapirequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeapirequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
