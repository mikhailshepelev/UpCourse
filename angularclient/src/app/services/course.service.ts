import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Course} from "../common/course";
import {Observable} from "rxjs";
import {map, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/courses';

  constructor(private httpClient: HttpClient) {
  }

  getCoursesList(): Observable<Course[]> {
    return this.httpClient.get<GetResponseCourses>(this.baseUrl).pipe(
      map(response => response._embedded.courses)
    );
  }

  getCourseById(id: number) {
    return this.httpClient.get<Course>(this.baseUrl + "/" + id);
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  postJson<T>(data: any): Observable<T> {
    return this.httpClient.post<T>(
      this.baseUrl,
      JSON.stringify(data),
      {headers: this.headers}
    )
  }

  deleteCourse(courseId:number) {
    const url = `http://localhost:8080/courses/${courseId}`;
    return this.httpClient.delete(url, {headers: this.headers})
  }

}

interface GetResponseCourses {
  _embedded: {
    courses: Course[];
  }
}

interface GetResponseCourse {
    course: Course;
}



