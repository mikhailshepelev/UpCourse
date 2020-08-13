import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {User} from "../../common/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user : User;
  submitted = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getLoggedUser().subscribe(
      (data: User) => {
        this.user = data;
      });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.user)
    this.userService.putJson(this.user).subscribe(
      data => {
        console.log(data)
        this.userService.getUsersList();
      });
    //TODO: complete routing
    //this.router.navigate(['courses'])
  }
}
