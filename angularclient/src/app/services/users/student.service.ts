import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../common/user";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAddStudentsList(theCourseId: number): Observable<User[]> {
    const searchUrl =
      `${this.baseUrl}/users/search/findByCoursesIsNotContainingAndRolesContains?course=${this.baseUrl}/courses/${theCourseId}&role=${this.baseUrl}/roles/2`;
    return this.httpClient.get<GetResponseUsers>(searchUrl).pipe(
      map(response => response._embedded.users)
    );
  }

  getDeleteStudentsList(theCourseId: number): Observable<User[]> {
    const searchUrl =
      `${this.baseUrl}/courses/${theCourseId}/users`;
    return this.httpClient.get<GetResponseUsers>(searchUrl).pipe(
      map(response => response._embedded.users)
    );
  }

  headers = new HttpHeaders({
    'Content-Type': 'text/uri-list'
  });

  addStudentToCourse(theCourseId: number, theStudentId: number) {
    const url = `${this.baseUrl}/courses/${theCourseId}/users`;
    const student = `${this.baseUrl}/users/${theStudentId}`;
    return this.httpClient.patch(url,student, {headers: this.headers});
  }

  deleteStudentFromCourse(theCourseId: number, theStudentId: number) {
    const url = `${this.baseUrl}/courses/${theCourseId}/users/${theStudentId}`;
    return this.httpClient.delete(url);
  }
}

interface GetResponseUsers {
  _embedded: {
    users: User[];
  }
}
