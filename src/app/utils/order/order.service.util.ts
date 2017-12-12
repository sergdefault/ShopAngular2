import {Injectable} from '@angular/core';
import {IProduct} from '../../products/product';

@Injectable()
export class OrderServiceUtil {
  products: IProduct[]= [];
  total: number = 0;
  constructor() {
  }
  addProduct(product: IProduct): void {
    this.products.push(product);
    this.total = this.getTotal();
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  deleteProduct(product: IProduct): void {
    this.products.splice(this.products.indexOf(product), 1);
    this.total = this.getTotal();
  }

  getTotal(): number {
    this.total = 0;
    this.products.forEach(p => this.total += p.price);
    return this.total;
  }
}
