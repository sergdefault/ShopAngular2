/**
 * Created by SerhiiTsymbaliuk on 12/7/17.
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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var authentication_service_1 = require("../login/authentication.service");
var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.baseUrl = 'http://192.168.0.57:8080/cabinet';
    }
    UserService.prototype.getUser = function () {
        var product$ = this.http
            .get(this.baseUrl + "/", { headers: this.getHeaders() })
            .map(mapUser);
        return product$;
    };
    UserService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken().toString());
        return headers;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, authentication_service_1.AuthenticationService])
], UserService);
exports.UserService = UserService;
function mapUser(response) {
    return toUser(response.json());
}
function toUser(r) {
    return r;
}
//# sourceMappingURL=user.service.js.map