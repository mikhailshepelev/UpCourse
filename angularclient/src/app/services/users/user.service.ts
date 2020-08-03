import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../common/user";
import {config, Observable} from "rxjs";
import {Course} from "../../common/course";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private registrationUrl = 'http://localhost:8080/registration';

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
}

interface GetResponseUsers {
  _embedded: {
    users: User[];
  }
}

interface GetResponseUser {
  user: User;
}
