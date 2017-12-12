import {Component} from '@angular/core';
import {OrderServiceUtil} from "./utils/order/order.service.util";
import {Router} from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: './main.html',

})
export class AppComponent{

    constructor(public service: OrderServiceUtil,private router: Router) {
    }

}
