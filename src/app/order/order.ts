import {IProduct} from "../products/product";
import {OrderItem} from "../products/order.item";
import {UserService} from "../cabinet/user.service";
/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */

export class Order {
  userId:number;
  items: OrderItem[]=[];
  date: Date;
  totalPrice:number;
  constructor(){
  }
}
