import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../products/product';
import {ProductService} from '../../products/productList/product.service';
import {OrderServiceUtil} from "../../utils/order/order.service.util";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styles: []
})

export class BasketComponent implements OnInit {
  p: IProduct[];

  constructor(private service: OrderServiceUtil, private pr: ProductService) {  }

  ngOnInit(): void {
    this.p = this.service.getProducts();
  }
  deleteProduct(product: IProduct) {
    this.service.deleteProduct(product);
  }
  save(): void {
    this.pr.save(this.p);
  }
}
