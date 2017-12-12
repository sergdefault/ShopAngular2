import {Component, Input} from '@angular/core';
import {IProduct} from '../../products/product';
import { OrderServiceUtil} from '../../utils/order/order.service.util';
/**
 * Created by SerhiiTsymbaliuk on 7/25/17.
 */
@Component({
  selector: 'basket-btn',
  templateUrl: './basket.btn.html',
  styles: []
})

export class BasketBtn  {
  @Input()
  product: IProduct;
  constructor(private service: OrderServiceUtil) {}

  addProductToBasket() {
    this.service.addProduct(this.product);
  }
}
