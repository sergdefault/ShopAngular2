"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var product_service_1 = require("./products/productList/product.service");
var product_component_1 = require("./products/productList/product.component");
var product_detail_component_1 = require("./products/productDetail/product.detail.component");
var app_component_1 = require("./app.component");
var categories_component_1 = require("./categories/menu/categories.component");
var basket_btn_component_1 = require("./basket/btn/basket.btn.component");
var basket_tcomponent_1 = require("./basket/container/basket.tcomponent");
var order_service_util_1 = require("./utils/order.service.util");
var login_component_1 = require("./login/login.component");
var header_component_1 = require("./header/header.component");
var authentication_service_1 = require("./login/authentication.service");
var user_cabinet_component_1 = require("./cabinet/user.cabinet.component");
var can_activate_authguard_1 = require("./login/can-activate.authguard");
var user_service_1 = require("./cabinet/user.service");
var order_service_1 = require("./order/order.service");
var order_list_component_1 = require("./order/orderList/order.list.component");
var appRoutes = [
    { path: 'category/:id', component: product_component_1.ProductListComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cabinet', component: user_cabinet_component_1.UserCabinetComponent, canActivate: [can_activate_authguard_1.CanActivateAuthGuard] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            product_component_1.ProductListComponent,
            categories_component_1.CategoryListComponent,
            product_detail_component_1.ProductDetailComponent,
            basket_btn_component_1.BasketBtn,
            basket_tcomponent_1.BasketComponent,
            login_component_1.LoginComponent,
            header_component_1.HeaderComponent,
            user_cabinet_component_1.UserCabinetComponent,
            order_list_component_1.OrderListComponent
        ],
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [product_service_1.ProductService,
            //CategoriesService,
            order_service_util_1.OrderServiceUtil,
            authentication_service_1.AuthenticationService,
            can_activate_authguard_1.CanActivateAuthGuard,
            user_service_1.UserService,
            order_service_1.OrderService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map