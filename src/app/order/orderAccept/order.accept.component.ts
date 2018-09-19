/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
import {Component} from "@angular/core";
import {IProduct} from "../../products/product";
import {OrderServiceUtil} from "../../utils/order/order.service.util";
import {Order} from "../order";
import {OrderService} from "../order.service";
import {UserService} from "../../cabinet/user.service";
import {User} from "../../cabinet/User";
import {OrderItem} from "../../products/order.item";


@Component({
  selector: 'app-accept-order',
  templateUrl: './order.accept.component.html',
})

export class OrderAcceptComponent {
  order: Order;
  total:number;
  user:User;

  constructor(private ordersUtil: OrderServiceUtil,
              private orderService : OrderService,
              private userService:UserService){
      this.order = this.ordersUtil.getOrder();
      this.total = this.ordersUtil.getOrder().totalPrice;
       this.userService.getUser().subscribe(u=>this.user=u);
  }

  deleteItem(item: OrderItem) {
    this.ordersUtil.deleteItem(item);
  }


  saveOrder(){
    this.userService.getUser().subscribe(u=>this.user=u);
    if(this.user==null){
      console.log("Error: empty user");
      return;
    }
    this.order.userId = 1;
    this.orderService.save(this.order);
  }
}
