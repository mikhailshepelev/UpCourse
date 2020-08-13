import {Component, OnInit} from '@angular/core';
import {BasicAuthenticationService} from "./services/security/basic-authentication.service";
import {UserService} from "./services/users/user.service";
import {User} from "./common/user";
import {Role} from "./common/role";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: Function;
  isAdmin;
  loggedUser: User;
  loggedUserRoles: Role[];

  constructor(public basicAuthService : BasicAuthenticationService,
              public userService: UserService,
              public route: ActivatedRoute) {}

  url = "assets/js/custom.js";

  ngOnInit(): void {
    this.loadScript();
    this.getLoggedUserRoles();
  }

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  getLoggedUserRoles() {
    if (this.basicAuthService.isUserLoggedIn()) {
      this.userService.getLoggedUser().subscribe(data => {
        this.loggedUser = data;
        this.userService.getUserRoles(this.loggedUser.id).subscribe(data => {
          this.loggedUserRoles = data;
          console.log(data);
          if (this.loggedUserRoles != undefined) {
            for (let tempRole of this.loggedUserRoles) {
              if (tempRole.name === 'ROLE_ADMIN') {
                this.isAdmin = true;
              }
            }
          }
          console.log(this.isAdmin);
        })
      })
    }
  }
}
