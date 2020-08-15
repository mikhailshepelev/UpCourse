import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Topic} from "../common/topic";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private baseUrl = 'http://localhost:8080/topics';

  getBaseUrl(): string {
    return this.baseUrl;
  }

  constructor(private httpClient: HttpClient) {
  }

  getTopicsList(theCourseId: number): Observable<Topic[]> {
    const searchUrl = `${this.baseUrl}/search/findByCourseId?id=${theCourseId}`;
    return this.httpClient.get<GetResponseTopics>(searchUrl).pipe(
      map(response => response._embedded.topics)
    );
  }

  getTopicById(id: number) {
    return this.httpClient.get<Topic>(this.baseUrl + "/" + id);
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

  deleteTopic(topicId: number) {
    const url = `http://localhost:8080/topics/${topicId}`;
    return this.httpClient.delete(url, {headers: this.headers})
  }
}

interface GetResponseTopics {
  _embedded: {
    topics: Topic[];
  }
}
