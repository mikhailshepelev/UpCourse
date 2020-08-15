import { Component, OnInit } from '@angular/core';
import {BasicAuthenticationService} from "../../services/security/basic-authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit(): void {
    this.basicAuthenticationService.logout();
    location.reload();
  }
}
