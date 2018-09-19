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
import {UserService} from "../cabinet/user.service";

@Injectable()
export class OrderService {
  private baseUrl: string = 'http://localhost:8080/orders';

  constructor(private http: Http,  private authenticationService: AuthenticationService, private userService : UserService) {
  }

  getOrders(): Observable<Order[]> {
    return this.http
      .get(`${this.baseUrl}/`, {headers: this.getHeaders()})
      .map(mapOrderArray);
  }

  save(order: Order){
    this.http.post(`${this.baseUrl}/save`, JSON.stringify(order), {headers: this.getHeaders()}).subscribe();
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Authorization','Bearer '+ this.authenticationService.getToken().toString());
    headers.append('Content-Type', 'application/json');

    return headers;
  }

}

function mapOrderArray(response: Response): Order[] {
  return response.json().map(toOrder);
}

function toOrder(r: any): Order {
  return r;
}
