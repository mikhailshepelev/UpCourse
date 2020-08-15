import {Component, OnInit} from '@angular/core';
import {BasicAuthenticationService} from "./services/security/basic-authentication.service";
import {UserService} from "./services/users/user.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAdmin = false;

  constructor(public basicAuthService : BasicAuthenticationService,
              public userService: UserService,
              public route: ActivatedRoute) {}

  url = "assets/js/custom.js";

  ngOnInit(): void {
    this.loadScript();
    if (this.basicAuthService.isUserLoggedIn()) {
      this.getLoggedUserRoles();
    }
  }

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  getLoggedUserRoles() {
      this.userService.getLoggedUser().subscribe(data => {
        for (let tempRole of data.authorities) {
          if (tempRole.authority === 'ROLE_ADMIN') {
            this.isAdmin = true;
          }}
      })
  }
}
