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
var OrderService = (function () {
    function OrderService() {
        this.products = [];
        this.total = 0;
    }
    OrderService.prototype.addProduct = function (product) {
        this.products.push(product);
        this.total = this.getTotal();
    };
    OrderService.prototype.getProducts = function () {
        return this.products;
    };
    OrderService.prototype.deleteProduct = function (product) {
        this.products.splice(this.products.indexOf(product), 1);
        this.total = this.getTotal();
    };
    OrderService.prototype.getTotal = function () {
        var _this = this;
        this.total = 0;
        this.products.forEach(function (p) { return _this.total += p.price; });
        return this.total;
    };
    return OrderService;
}());
OrderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map