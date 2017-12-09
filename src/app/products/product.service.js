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
/**
 * Created by SerhiiTsymbaliuk on 7/15/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    ProductService.prototype.get = function (id) {
        var product$ = this.http
            .get(this.baseUrl + "/products/" + id, { headers: this.getHeaders() })
            .map(mapProduct);
        return product$;
    };
    ProductService.prototype.getAll = function () {
        var product$ = this.http
            .get(this.baseUrl + "/products", { headers: this.getHeaders() })
            .map(mapProducts);
        return product$;
    };
    ProductService.prototype.save = function (products) {
        this.http.post(this.baseUrl + "/products/save", JSON.stringify(products), { headers: this.getHeaders() }).subscribe();
    };
    ProductService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
function mapProducts(response) {
    return response.json().map(toProduct);
}
function mapProduct(response) {
    return toProduct(response.json());
}
function toProduct(r) {
    return r;
}
//# sourceMappingURL=product.service.js.map