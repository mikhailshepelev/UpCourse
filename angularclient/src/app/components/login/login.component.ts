import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BasicAuthenticationService} from "../../services/security/basic-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  //router is dependency injection, injected behind the scene
  constructor(private router: Router,
              private basicAuthenticationService : BasicAuthenticationService) {
  }

  ngOnInit(): void {
  }

  handleBasicAuthLogin() {
      this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['courses', this.username])
            this.invalidLogin = false;
          },
          error => {
            console.log(error)
            this.invalidLogin = true;
          }
        )
    }
}

