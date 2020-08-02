import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {User} from "../../common/user";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User('', '',
    '', '', '');

  submitted = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.userService.postJson(this.user).subscribe(
      data => {
        console.log(data)
        this.userService.getUsersList();
      });
  }
}
