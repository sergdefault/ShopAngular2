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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by SerhiiTsymbaliuk on 7/15/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    CategoriesService.prototype.getAll = function () {
        var categories$ = this.http
            .get(this.baseUrl + "/categories", { headers: this.getHeaders() })
            .map(mapCategoryArray);
        return categories$;
    };
    CategoriesService.prototype.getById = function (id) {
        var categories$ = this.http
            .get(this.baseUrl + "/categories/" + id, { headers: this.getHeaders() })
            .map(mapCategory);
        return categories$;
    };
    CategoriesService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoriesService);
exports.CategoriesService = CategoriesService;
function mapCategoryArray(response) {
    return response.json().map(toCategory);
}
function mapCategory(response) {
    return toCategory(response.json());
}
function toCategory(c) {
    return c;
}
//# sourceMappingURL=categories.sercice.js.map