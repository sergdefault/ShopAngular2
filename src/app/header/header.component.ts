/**
 * Created by SerhiiTsymbaliuk on 12/6/17.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from "../login/authentication.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  isUser : boolean;
  constructor(private route: ActivatedRoute, private service: AuthenticationService) {}

  ngOnInit() {
      //this.isUser= this.service.isLoggedIn();
  }

  logout() : void{
    this.service.logout();
  }

}
