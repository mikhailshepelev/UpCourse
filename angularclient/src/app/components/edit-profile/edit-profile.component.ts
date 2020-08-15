import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {User} from "../../common/user";
import {Router} from "@angular/router";
import $ from 'node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User = new User('', '', '', '', '');
  submitted = false;
  emails: string[];
  initialUserEmail: string;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit():void{
    this.userService.getLoggedUser().subscribe(
      (data: User) => {
        this.user = data;
        this.initialUserEmail = data.email;
      });
    this.userService.getAllEmails().subscribe(
      data => this.emails = data
    )

    $('.btn-add').click(function successAlert() {
      $('.alert-success').fadeTo(2000, 500).slideUp(500, function () {
        $('.alert-success').slideUp(500);
      });
    });
  }

  onSubmit() {
    for (let email of this.emails){
      if (email === this.user.email && email != this.initialUserEmail) {
        alert("Error! The email address you have entered is already registered")
        return;
      }
    }
    this.submitted = true;
    this.userService.patchJson(this.user).subscribe(
      data => {
        this.userService.getUsersList();
      });
  }
}
