import { TestBed } from '@angular/core/testing';

import { BigramService } from './bigram.service';

describe('BigramService', () => {
  let service: BigramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
