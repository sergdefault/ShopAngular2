"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var core_1 = require("@angular/core");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
//# sourceMappingURL=main.js.map