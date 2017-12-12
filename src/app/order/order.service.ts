/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthenticationService} from "../login/authentication.service";
import {User} from "../cabinet/User";
import {Order} from "./order";

@Injectable()
export class OrderService {
  private baseUrl: string = 'http://212.68.160.118:8080/orders';

  constructor(private http: Http,  private authenticationService: AuthenticationService) {
  }

  getOrders(): Observable<Order[]> {
    return this.http
      .get(`${this.baseUrl}/`, {headers: this.getHeaders()})
      .map(mapOrderArray);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Authorization','Bearer '+ this.authenticationService.getToken().toString());
    return headers;
  }

}

function mapOrderArray(response: Response): Order[] {
  return response.json().map(toOrder);
}

function mapUser(response: Response): Order {
  return toOrder(response.json());
}

function toOrder(r: any): Order {
  return r;
}
