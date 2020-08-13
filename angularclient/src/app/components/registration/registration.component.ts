import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {User} from "../../common/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User('', '',
    '', '', '');

  submitted = false;
  usernames: string[];
  emails: string[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsernames().subscribe(
      data => this.usernames = data
    )
    this.userService.getAllEmails().subscribe(
      data => this.emails = data
    )
  }

  onSubmit() {
    for (let username of this.usernames){
      if (username === this.user.username) {
        alert("Registration not successful. Username already exists")
        return;
      }
    }
    for (let email of this.emails){
      if (email === this.user.email) {
        alert("Registration not successful. The email address you have entered is already registered")
        return;
      }
    }
      this.submitted = true;
      this.userService.postJson(this.user).subscribe(
        data => {
          this.userService.getUsersList();
        });
    }
}
