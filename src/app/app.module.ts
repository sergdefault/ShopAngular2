import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { ProductService } from './products/productList/product.service';
import { ProductListComponent } from './products/productList/product.component';
import {ProductDetailComponent} from './products/productDetail/product.detail.component';
import {AppComponent} from './app.component';
import {CategoryListComponent} from './categories/menu/categories.component';
import {BasketBtn} from './basket/btn/basket.btn.component';
import {CategoriesService} from './categories/categories.sercice';
import {BasketComponent} from './basket/container/basket.tcomponent';
import {OrderServiceUtil} from './utils/order.service.util';
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";
import {AuthenticationService} from "./login/authentication.service";
import {UserCabinetComponent} from "./cabinet/user.cabinet.component";
import {CanActivateAuthGuard} from "./login/can-activate.authguard";
import {UserService} from "./cabinet/user.service";
import {OrderService} from "./order/order.service";
import {OrderListComponent} from "./order/orderList/order.list.component";
import {OrderAcceptComponent} from "./order/orderAccept/order.accept.component";
import {CreateNewUserComponent} from "./login/newuser/new.user.component";


const appRoutes: Routes = [
  { path: 'category/:id', component: ProductListComponent },
  { path: 'product/:id',      component: ProductDetailComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'cabinet',      component: UserCabinetComponent, canActivate: [CanActivateAuthGuard]},
  { path: 'order',      component: OrderAcceptComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductDetailComponent,
    BasketBtn,
    BasketComponent,
    LoginComponent,
    HeaderComponent,
    UserCabinetComponent,
    OrderListComponent,
    OrderAcceptComponent,
    CreateNewUserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ProductService,
    //CategoriesService,
    OrderServiceUtil,
    AuthenticationService,
    CanActivateAuthGuard,
    UserService,
    OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
