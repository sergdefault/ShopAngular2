import {Component, OnInit} from '@angular/core';
import {OrderServiceUtil} from "./utils/order.service.util";

@Component({
  selector: 'my-app',
  templateUrl: './main.html',

})
export class AppComponent{

    constructor(public service: OrderServiceUtil) {}
}
