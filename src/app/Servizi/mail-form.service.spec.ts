import { TestBed } from '@angular/core/testing';

import { MailFormService } from './mail-form.service';

describe('MailFormService', () => {
  let service: MailFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
