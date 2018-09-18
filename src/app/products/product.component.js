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
var categories_sercice_1 = require("../menus/categories.sercice");
var ProductListComponent = (function () {
    function ProductListComponent(route, categoriesService) {
        this.route = route;
        this.categoriesService = categoriesService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            _this.categoriesService.getById(id).subscribe(function (p) { return _this.products = p.products; });
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'app-products',
        templateUrl: './productList.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, categories_sercice_1.CategoriesService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product.component.js.map
