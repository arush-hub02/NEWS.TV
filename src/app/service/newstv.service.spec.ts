import { TestBed } from '@angular/core/testing';

import { NewstvService } from './newstv.service';

describe('NewstvService', () => {
  let service: NewstvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewstvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
