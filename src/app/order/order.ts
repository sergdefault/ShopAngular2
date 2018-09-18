import {IProduct} from "../products/product";
/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */

export interface Order {
  id: number;
  userId: number;
  items: IProduct[];
}
