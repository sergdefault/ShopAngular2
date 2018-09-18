import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../login/authentication.service";

@Component({
  selector: 'admin-menu',
  templateUrl: './admin.menu.html',
  styles: []
})

export class AdminMenuComponent {
  constructor(private route: ActivatedRoute, private service: AuthenticationService) {}

}
