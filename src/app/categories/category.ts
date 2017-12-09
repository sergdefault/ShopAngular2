import { IProduct} from '../products/product';
/**
 * Created by SerhiiTsymbaliuk on 7/16/17.
 */

export interface ICategory {
  id: number;
  name: string;
  description: string;
  products: IProduct[];
}

