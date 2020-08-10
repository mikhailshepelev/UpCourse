import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BasicAuthenticationService} from "../../services/security/basic-authentication.service";

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
              public basicAuthenticationService : BasicAuthenticationService) {
  }

  ngOnInit(): void {
    this.router.navigateByUrl(`/login`);
  }

  handleJwtAuthLogin() {
    this.basicAuthenticationService.executeJwtAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          //TODO: route depending on role
          this.router.navigate(['courses'])
          this.invalidLogin = false;
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

