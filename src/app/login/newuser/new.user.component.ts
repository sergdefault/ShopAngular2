/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
import {Component, Input, OnInit} from "@angular/core";
import {IProduct} from "../../products/product";
import {OrderServiceUtil} from "../../utils/order/order.service.util";
import {UserService} from "../../cabinet/user.service";
import {User} from "../../cabinet/User";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'new-user',
  templateUrl: './new.user.component.html',
})

export class CreateNewUserComponent {
  model: any = {};
  loading = false;

  constructor(private userService :UserService,public fb: FormBuilder){
      this.userService.getUser().subscribe(u => this.model=u);
  }

  register() {
    this.loading = true;
    console.log(this.model.json);
    this.userService.create(this.model);
  }

}
