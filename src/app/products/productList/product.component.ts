import {IProduct} from '../product';
import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../../menus/categories.sercice';

@Component({
  selector: 'app-products',
  providers:[CategoriesService],
  templateUrl: './productList.component.html',
})

export class ProductListComponent{
  products: IProduct[];
  private sub: any;
  private isSpinnerActive:boolean;

  constructor(private route: ActivatedRoute, private  categoriesService: CategoriesService) {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.categoriesService.getById(id).subscribe(p => this.products = p.products);
    });
  }


}
