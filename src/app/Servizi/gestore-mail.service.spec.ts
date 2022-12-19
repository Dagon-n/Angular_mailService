import { TestBed } from '@angular/core/testing';

import { GestoreMailService } from './gestore-mail.service';

describe('GestoreMailService', () => {
  let service: GestoreMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestoreMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
