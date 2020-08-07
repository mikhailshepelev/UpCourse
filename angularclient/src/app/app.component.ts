import {Component, OnInit} from '@angular/core';
import {BasicAuthenticationService} from "./services/security/basic-authentication.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: Function;

  constructor(public basicAuthService : BasicAuthenticationService) { }

  url = "assets/js/custom.js";

  ngOnInit(): void {
    this.loadScript();

  }

  /** Load Custom JavaScript file */

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    document.getElementsByTagName("head")[0].appendChild(node);
  }
}
