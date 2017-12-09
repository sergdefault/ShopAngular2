/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var authentication_service_1 = require("../login/authentication.service");
var OrderService = (function () {
    function OrderService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.baseUrl = 'http://localhost:8080/orders';
    }
    OrderService.prototype.getOrders = function () {
        return this.http
            .get(this.baseUrl + "/", { headers: this.getHeaders() })
            .map(mapOrderArray);
    };
    OrderService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken().toString());
        return headers;
    };
    return OrderService;
}());
OrderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, authentication_service_1.AuthenticationService])
], OrderService);
exports.OrderService = OrderService;
function mapOrderArray(response) {
    return response.json().map(toOrder);
}
function mapUser(response) {
    return toOrder(response.json());
}
function toOrder(r) {
    return r;
}
//# sourceMappingURL=order.service.js.map