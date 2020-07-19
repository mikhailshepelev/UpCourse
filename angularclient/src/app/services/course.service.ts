import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../common/course";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/courses';

  constructor(private httpClient: HttpClient) { }

  getCoursesList(): Observable<Course[]> {
    return this.httpClient.get<GetResponseCourses>(this.baseUrl).pipe(
      map(response => response._embedded.courses)
    );
  }
}

interface GetResponseCourses {
  _embedded: {
    courses: Course[];
  }
}
