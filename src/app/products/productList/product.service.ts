/**
 * Created by SerhiiTsymbaliuk on 7/15/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../product';
import 'rxjs/add/operator/map';
import {AuthenticationService} from "../../login/authentication.service";

@Injectable()
export class ProductService {
  private baseUrl: string = 'http://212.68.160.118:8080';

  constructor(private http: Http) {
  }

  get(id: number): Observable<IProduct> {
    let product$ = this.http
      .get(`${this.baseUrl}/products/${id}`, {headers: this.getHeaders()})
      .map(mapProduct);
    return product$;
  }

  getAll(): Observable<IProduct[]> {
    let product$ = this.http
      .get(`${this.baseUrl}/products`, {headers: this.getHeaders()})
      .map(mapProducts);
    return product$;
  }

  save(products: IProduct[]){
    this.http.post(`${this.baseUrl}/products/save`, JSON.stringify(products), {headers: this.getHeaders()}).subscribe();
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

function mapProducts(response: Response): IProduct[] {
  return response.json().map(toProduct);
}

function mapProduct(response: Response): IProduct {
  return toProduct(response.json());
}

function toProduct(r: any): IProduct {
  return r;
}
