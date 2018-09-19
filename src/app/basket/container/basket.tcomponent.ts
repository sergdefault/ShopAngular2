import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../products/productList/product.service';
import {OrderServiceUtil} from "../../utils/order/order.service.util";
import {Order} from "../../order/order";
import {OrderItem} from "../../products/order.item";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styles: []
})

export class BasketComponent implements OnInit {
  order: Order;

  constructor(private service: OrderServiceUtil, private pr: ProductService) {  }

  ngOnInit(): void {
    this.order = this.service.getOrder();
  }
  deleteItem(item: OrderItem) {
    this.service.deleteItem(item);
  }

}
