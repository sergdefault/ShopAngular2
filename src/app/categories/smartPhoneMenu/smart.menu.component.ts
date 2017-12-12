/**
 * Created by SerhiiTsymbaliuk on 7/16/17.
 */

import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.sercice';
import {ICategoryBase} from '../CategoryBase';
import {Router} from '@angular/router';


@Component({
  selector: 'smart-menu',
  providers:[CategoriesService],
  templateUrl: './smart.menu.html',
  styles: ['./smart-menu.css']
})

export class SmartMenuComponent{
  categories: ICategoryBase[];
  constructor(private router: Router, private categoriesService: CategoriesService) {
    this.categoriesService.getAll().subscribe(p => this.categories = p);
  }
}
