import {IProduct} from '../product';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../productList/product.service';
/**
 * Created by SerhiiTsymbaliuk on 7/25/17.
 */
@Component({
  selector: 'product-detail',
  templateUrl: './product.detail.html',
})

export class ProductDetailComponent implements OnInit, OnDestroy {
  private product: IProduct;
  private sub: any;

  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.service.get(id).subscribe(p => this.product = p);
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
