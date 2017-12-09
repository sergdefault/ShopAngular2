/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
import {Component, OnInit} from "@angular/core";
import {OrderService} from "../order.service";
import {Order} from "../order";


@Component({
  selector: 'app-orders',
  templateUrl: './order.list.component.html',
})

export class OrderListComponent implements OnInit{
  orders : Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(o => this.orders = o);
  }
}
