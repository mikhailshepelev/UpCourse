import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Lesson} from "../common/lesson";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private baseUrl = 'http://localhost:8080/lessons';

  getBaseUrl(): string {
    return this.baseUrl;
  }

  constructor(private httpClient: HttpClient) {
  }

  getLessonsList(theLessonId: number): Observable<Lesson[]> {
    const searchUrl = `${this.baseUrl}/search/findByTopicId?id=${theLessonId}`;
    return this.httpClient.get<GetResponseLessons>(searchUrl).pipe(
      map(response => response._embedded.lessons)
    );
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  postJson<T>(data: any): Observable<T> {
    console.log(JSON.stringify(data));
    return this.httpClient.post<T>(
      this.baseUrl,
      JSON.stringify(data),
      {headers: this.headers}
    )
  }


  deleteLesson(lessonId: number) {
    const url = `${this.baseUrl}/${lessonId}`;
    return this.httpClient.delete(url, {headers: this.headers})
  }


  searchLessons(theKeyword: string): Observable<Lesson[]> {
    const searchUrl = `${this.baseUrl}/search/findBySubjectContaining?subject=${theKeyword}`;
    return this.httpClient.get<GetResponseLessons>(searchUrl).pipe(
      map(response => response._embedded.lessons)
    );
  }

  getAllLoggedUserLessons(username: string) {
    const searchUrl = `http://localhost:8080/schedule/${username}`;
    return this.httpClient.get<Lesson[]>(searchUrl);
  }
}

interface GetResponseLessons {
  _embedded: {
    lessons: Lesson[];
  }
}
