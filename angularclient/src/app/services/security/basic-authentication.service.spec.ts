import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationService } from './basic-authentication.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BasicAuthenticationService', () => {
  let service: BasicAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BasicAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
