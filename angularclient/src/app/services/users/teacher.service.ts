import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../common/user";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAddTeachersList(theTopicId: number): Observable<User[]> {
    const searchUrl =
      `${this.baseUrl}/users/search/findByTopicsIsNotContainingAndRolesContaining?topic=${this.baseUrl}/topics/${theTopicId}&role=${this.baseUrl}/roles/3`;
    return this.httpClient.get<GetResponseUsers>(searchUrl).pipe(
      map(response => response._embedded.users)
    );
  }

  getDeleteTeacher(theTopicId: number) {
    const searchUrl = `${this.baseUrl}/topics/${theTopicId}/teacher`;
    return this.httpClient.get<User>(searchUrl);
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  addTeacherToTopic(theTopicId: number, theTeacherId: number) {
    const url = `${this.baseUrl}/topics/${theTopicId}`;
    const teacher = `${this.baseUrl}/users/${theTeacherId}`;
    return this.httpClient.patch(url,JSON.stringify({'teacher' : teacher}), {headers: this.headers});
  }

  deleteTeacherFromTopic(theTopicId: number, theTeacherId: number) {
    const url = `${this.baseUrl}/topics/${theTopicId}/teacher/${theTeacherId}`;
    return this.httpClient.delete(url);
  }
}

interface GetResponseUsers {
  _embedded: {
    users: User[];
  }
}
