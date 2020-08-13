import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {User} from "../../common/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User = new User('', '', '', '', '');
  submitted = false;
  emails: string[];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit():void{
    this.userService.getLoggedUser().subscribe(
      (data: User) => {
        console.log(data)
        this.user = data;
      });
    this.userService.getAllEmails().subscribe(
      data => this.emails = data
    )
  }

  onSubmit() {
    for (let email of this.emails){
      if (email === this.user.email) {
        alert("Operation not successful. The email address you have entered is already registered")
        return;
      }
    }
    this.submitted = true;
    console.log(this.user)
    this.userService.putJson(this.user).subscribe(
      data => {
        console.log(data)
        this.userService.getUsersList();
      });
    //TODO: complete routing
  }
}
