import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticationService} from "./basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let basicAuthHeaderString = 'Basic ' + window.btoa('alexj:1234');
    // request = request.clone({
    //   setHeaders : {
    //     Authorization:basicAuthHeaderString
    //   }
    // })
    // return next.handle(request)
    console.log(this.basicAuthenticationService.getAuthenticatedToken())
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
    return next.handle(request);
  }
}
