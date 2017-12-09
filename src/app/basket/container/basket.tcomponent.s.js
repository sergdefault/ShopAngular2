"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BasketComponent = (function () {
    function BasketComponent() {
    }
    BasketComponent.prototype.addProductToBasket = function () {
        this.basket.products.push(this.product);
        this.calculateTotalPrice();
    };
    BasketComponent.prototype.calculateTotalPrice = function () {
        var sum = 0;
        for (var _i = 0, _a = this.basket.products; _i < _a.length; _i++) {
            var item = _a[_i];
            sum = sum + item.price;
        }
        this.basket.totalPrice = sum;
    };
    return BasketComponent;
}());
__decorate([
    Input()
], BasketComponent.prototype, "product", void 0);
BasketComponent = __decorate([
    core_1.Component({
        selector: 'app-basket',
        templateUrl: './basket.btn.html',
        styles: []
    })
], BasketComponent);
exports.BasketComponent = BasketComponent;
