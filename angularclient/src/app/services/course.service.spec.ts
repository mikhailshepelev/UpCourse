import {inject, TestBed} from '@angular/core/testing';

import { CourseService } from './course.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('CourseService', () => {
  let service: CourseService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CourseService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get course by id',
    inject([HttpTestingController, CourseService],
      (httpMock: HttpTestingController, service: CourseService) => {

      const mockCourses = [
        { id: 1,
          name: 'Java'},
        { id: 2,
          name: 'Python'}
      ];

    service.getCourseById(1)
      .subscribe(data => {
        expect(data[0].id).toEqual(1);
        expect(data[0].name).toEqual('Java'
        );
      });

    const req = httpMock.expectOne('http://localhost:8080/courses/1');
    expect(req.request.method).toEqual('GET');

    req.flush(mockCourses);
  })
  );



});
