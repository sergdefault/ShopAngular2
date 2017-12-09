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
var order_service_util_1 = require("./order.service.util");
/**
 * Created by SerhiiTsymbaliuk on 7/25/17.
 */
var BasketBtn = (function () {
    function BasketBtn(service) {
        this.service = service;
    }
    BasketBtn.prototype.addProductToBasket = function () {
        this.service.addProduct(this.product);
    };
    return BasketBtn;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BasketBtn.prototype, "product", void 0);
BasketBtn = __decorate([
    core_1.Component({
        selector: 'basket-btn',
        templateUrl: './basket.btn.html',
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_util_1.OrderServiceUtil !== "undefined" && order_service_util_1.OrderServiceUtil) === "function" && _a || Object])
], BasketBtn);
exports.BasketBtn = BasketBtn;
var _a;
//# sourceMappingURL=basket.btn.component.js.map