import {IProduct} from '../product';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../../categories/categories.sercice';

@Component({
  selector: 'app-products',
  providers:[CategoriesService],
  templateUrl: './productList.component.html',
})

export class ProductListComponent implements OnInit, OnDestroy {
  products: IProduct[];
  private sub: any;

  constructor(private route: ActivatedRoute, private  categoriesService: CategoriesService) {
    console.log('const');
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.categoriesService.getById(id).subscribe(p => this.products = p.products);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
