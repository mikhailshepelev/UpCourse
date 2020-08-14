import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {LoginComponent} from "../login/login.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  email;
  invalidEmail = false;
  sentEmail = false;

  constructor(private userService: UserService,
              private loginComponent: LoginComponent) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.userService.resetPassword(this.email).subscribe(() => {
       this.sentEmail = true;
       this.invalidEmail = false;
       this.email = '';
      },
      (error: HttpErrorResponse) => {
      this.invalidEmail = true;
  });
  }

  goToLoginPage() {
    this.loginComponent.clickResetPassword = false;
  }

  goToRegistrationPage() {
    this.loginComponent.clickResetPassword = false;
    this.loginComponent.clickRegister = true;
  }

}
