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
 * Created by SerhiiTsymbaliuk on 12/6/17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../login/authentication.service");
var HeaderComponent = (function () {
    function HeaderComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        //this.isUser= this.service.isLoggedIn();
    };
    HeaderComponent.prototype.logout = function () {
        this.service.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header-component',
        templateUrl: './smart.header.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, authentication_service_1.AuthenticationService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map
