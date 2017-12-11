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
var user_service_1 = require("./user.service");
var UserCabinetComponent = (function () {
    function UserCabinetComponent(userService) {
        this.userService = userService;
    }
    UserCabinetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (u) { return _this.user = u; });
    };
    return UserCabinetComponent;
}());
UserCabinetComponent = __decorate([
    core_1.Component({
        templateUrl: './user.cabinet.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserCabinetComponent);
exports.UserCabinetComponent = UserCabinetComponent;
//# sourceMappingURL=user.cabinet.component.js.map