/**
 * Created by SerhiiTsymbaliuk on 7/15/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ICategory} from './category';
import {ICategoryBase} from './CategoryBase';
import {AuthenticationService} from "../login/authentication.service";

@Injectable()
export class CategoriesService {
  private baseUrl: string = 'http://212.68.160.118:8080';

  constructor(private http: Http) {
  }


  getAll(): Observable<ICategoryBase[]> {
    let categories$ = this.http
      .get(`${this.baseUrl}/categories`, {headers: this.getHeaders()})
      .map(mapCategoryArray);
    return categories$;
  }

  getById(id: number): Observable<ICategory> {
    let categories$ = this.http
      .get(`${this.baseUrl}/categories/${id}`, {headers: this.getHeaders()})
      .map(mapCategory);
    return categories$;
  }


  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

function mapCategoryArray(response: Response): ICategory[] {
  return response.json().map(toCategory);
}

function mapCategory(response: Response): ICategory {
  return toCategory(response.json());
}

function toCategory(c: any): ICategory {
  return c;
}
