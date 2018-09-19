/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
import {Component} from "@angular/core";
import {IProduct} from "../../products/product";
import {OrderServiceUtil} from "../../utils/order/order.service.util";
import {Order} from "../order";
import {OrderService} from "../order.service";


@Component({
  selector: 'app-accept-order',
  templateUrl: './order.accept.component.html',
})

export class OrderAcceptComponent {
  order: Order;
  total:number;

  constructor(private ordersUtil: OrderServiceUtil,private orderService : OrderService){
      this.order = this.ordersUtil.getOrder();
      this.total = this.ordersUtil.getOrder().totalPrice;
  }

  deleteProduct(product: IProduct) {
    this.ordersUtil.deleteProduct(product);
  }


  saveOrder(){
    this.orderService.save(this.order);
  }
}
