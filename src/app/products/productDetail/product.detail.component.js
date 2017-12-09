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
var router_1 = require("@angular/router");
var product_service_1 = require("../productList/product.service");
/**
 * Created by SerhiiTsymbaliuk on 7/25/17.
 */
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            _this.service.get(id).subscribe(function (p) { return _this.product = p; });
        });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: './product.detail.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product.detail.component.js.map