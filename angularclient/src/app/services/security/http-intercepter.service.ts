import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {BasicAuthenticationService} from "./basic-authentication.service";
import {catchError, map, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : BasicAuthenticationService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone(
        {
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
        }
      )
    }
    return next.handle(request).pipe(
      catchError((error) => {
        switch (error.status) {
          case 400:
            this.router.navigate(['error-400']);
            break;
          case 403:
            this.router.navigate(['error-403']);
            break;
          case 404:
            break;
          default: this.router.navigate(['error']);
        }
        return throwError(error.message);
      })
    )
  }
}
