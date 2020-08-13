import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BasicAuthenticationService} from "../../services/security/basic-authentication.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  invalidLogin = false;
  clickRegister: boolean = false;

  constructor(private router: Router,
              public basicAuthenticationService : BasicAuthenticationService,
              private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    this.router.navigateByUrl(`/login`);
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

  handleJwtAuthLogin() {
    this.basicAuthenticationService.executeJwtAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['courses']);
          this.invalidLogin = false;
          this.appComponent.getLoggedUserRoles();
        },
        error => {
          console.log(error)
          this.invalidLogin = true;
        }
      )
  }

    clickedRegister(){
    this.clickRegister = true;
    }

}

