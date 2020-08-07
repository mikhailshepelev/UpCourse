import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../common/user";
import {config, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Role} from "../../common/role";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080';
  private registrationUrl = `${this.baseUrl}/registration`;

  getRegistrationUrl(): string {
    return this.registrationUrl;
  }

  constructor(private httpClient: HttpClient) {
  }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<GetResponseUsers>(this.getRegistrationUrl()).pipe(
      map(response => response._embedded.users)
    );
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  postJson<T>(user: User): Observable<T> {
    console.log(user)
    return this.httpClient.post<T>(
      this.getRegistrationUrl(),
      JSON.stringify(user),
      {headers: this.headers}
    )
  }

  getUserByUsername(username: string) {

    // need to build URL based on the keyword
    const getUserUrl = `${this.baseUrl}/users/search/findByUsername?username=${username}`;
    return this.httpClient.get<User>(getUserUrl);
  }

  getUserRoles(userId: number) {
    const searchUrl = `${this.baseUrl}/users/${userId}/roles`;
    return this.httpClient.get<GetResponseRoles>(searchUrl).pipe(
      map(response => response._embedded.roles)
    );
  }

  removeTeacherRole(userId: number) {
    const searchUrl = `${this.baseUrl}/users/${userId}/roles/3`;
    return this.httpClient.delete(searchUrl)
      .subscribe(data => {
        console.log("role changed - Student");
      }, error => {
        console.log('error')
        });
  }


  addTeacherRole(userId: number) {
    const searchUrl = `${this.baseUrl}/users/${userId}/roles/`;
    const role = `${this.baseUrl}/roles/3`;
    return this.httpClient.patch(searchUrl,role, {headers: {'Content-Type': 'text/uri-list'}})
      .subscribe(data => {
      console.log('role changed - Teacher');
    }, error => {console.log("error")});

  }
}

interface GetResponseUsers {
  _embedded: {
    users: User[];
  }
}

interface GetResponseRoles {
  _embedded: {
    roles: Role[];
  }
}

