/**
 * Created by SerhiiTsymbaliuk on 7/16/17.
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
var categories_sercice_1 = require("../categories.sercice");
var router_1 = require("@angular/router");
var CategoryListComponent = (function () {
    function CategoryListComponent(router, categoriesService) {
        var _this = this;
        this.router = router;
        this.categoriesService = categoriesService;
        this.categoriesService.getAll().subscribe(function (p) { return _this.categories = p; });
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        // this.categoriesService.getAll().subscribe(p => this.categories = p);
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    core_1.Component({
        selector: 'app-categories',
        providers: [categories_sercice_1.CategoriesService],
        templateUrl: './category.menu.html',
        styles: []
    }),
    __metadata("design:paramtypes", [router_1.Router, categories_sercice_1.CategoriesService])
], CategoryListComponent);
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=categories.component.js.map