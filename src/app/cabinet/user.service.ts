/**
 * Created by SerhiiTsymbaliuk on 12/7/17.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthenticationService} from "../login/authentication.service";
import {User} from "./User";

@Injectable()
export class UserService {
  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: Http,  private authenticationService: AuthenticationService) {
  }

  getUser(): Observable<User> {
    let product$ = this.http
      .get(`${this.baseUrl}cabinet/`, {headers: this.getHeaders()})
      .map(mapUser);
    return product$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Authorization','Bearer '+ this.authenticationService.getToken().toString());
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private getHeadersJSON() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

 create(user: User){
    this.http
      .post(`${this.baseUrl}create`, JSON.stringify(user), {headers: this.getHeadersJSON()}).subscribe();
  }
}

function mapUser(response: Response): User {
  return toUser(response.json());
}

function toUser(r: any): User {
  return r;
}
