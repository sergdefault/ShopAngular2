/**
 * Created by SerhiiTsymbaliuk on 12/6/17.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./User";

@Component({
  templateUrl: './user.cabinet.component.html',
})

export class UserCabinetComponent implements OnInit{
  user : User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(u => this.user = u);
  }
}
