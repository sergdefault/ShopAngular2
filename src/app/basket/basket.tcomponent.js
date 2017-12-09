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
var product_service_1 = require("../products/product.service");
var order_service_util_1 = require("./order.service.util");
var BasketComponent = (function () {
    function BasketComponent(service, pr) {
        this.service = service;
        this.pr = pr;
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.p = this.service.getProducts();
    };
    BasketComponent.prototype.deleteProduct = function (product) {
        this.service.deleteProduct(product);
    };
    BasketComponent.prototype.save = function () {
        this.pr.save(this.p);
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    core_1.Component({
        selector: 'app-basket',
        templateUrl: './basket.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_util_1.OrderServiceUtil !== "undefined" && order_service_util_1.OrderServiceUtil) === "function" && _a || Object, typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _b || Object])
], BasketComponent);
exports.BasketComponent = BasketComponent;
var _a, _b;
//# sourceMappingURL=basket.tcomponent.js.map