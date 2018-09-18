/**
 * Created by SerhiiTsymbaliuk on 12/6/17.
 */
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from "../../login/authentication.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
})

export class HeaderComponent{
  constructor(private route: ActivatedRoute, private auth: AuthenticationService) {}

  logout() : void{
    this.auth.logout();
  }

}
