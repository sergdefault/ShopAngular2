import {Injectable} from '@angular/core';
import {IProduct} from '../../products/product';
import {OrderItem} from "../../products/order.item";
import {Order} from "../../order/order";
import {User} from "../../cabinet/User";

@Injectable()
export class OrderServiceUtil {
  order = new Order();

  addProduct(product: IProduct): void {
    if (this.order.items.length == 0) {
      this.order.items.push(new OrderItem(product, 1));
    } else {
      let index: number;
      this.order.items.forEach(i => {
          if (product.product_id == i.product_id) {
            index = this.order.items.indexOf(i);
          }
        }
      );
      if (index == null) {
        this.order.items.push(new OrderItem(product, 1));
      } else {
        this.order.items[index].quantity++;
      }
    }
    this.calculateTotal()
  }

  getOrder(): Order {
    return this.order;
  }

  deleteItem(item: OrderItem): void {
    this.order.items.splice(this.order.items.indexOf(item));
    this.calculateTotal()
  }

  calculateTotal() {
    this.order.totalPrice = 0;
    this.order.items.forEach(i => this.order.totalPrice += i.price * i.quantity);
  }

}
