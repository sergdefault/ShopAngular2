import {IProduct} from "./product";
export class OrderItem {
  product_id:number;
  name:string;
  price:number;
  quantity:number;

  constructor(product:IProduct,quantity:number){
    this.product_id=product.product_id;
    this.price=product.price;
    this.name=product.name;
    this.quantity=quantity;
  }
}
