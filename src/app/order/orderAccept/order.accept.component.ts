/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
import {Component} from "@angular/core";
import {IProduct} from "../../products/product";
import {OrderServiceUtil} from "../../utils/order/order.service.util";


@Component({
  selector: 'app-accept-order',
  templateUrl: './order.accept.component.html',
})

export class OrderAcceptComponent {
  products: IProduct[];
  total:number;

  constructor(private ordersUtil: OrderServiceUtil){
      this.products = this.ordersUtil.getProducts();
      this.total = this.ordersUtil.getTotal();
  }

  deleteProduct(product: IProduct) {
    this.ordersUtil.deleteProduct(product);
  }
}
