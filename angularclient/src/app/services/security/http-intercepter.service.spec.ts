import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpIntercepterService } from './http-intercepter.service';
import {HttpClient} from "@angular/common/http";

describe('HttpIntercepterService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: HttpIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(HttpIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
