"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var navbar_component_1 = require("./components/navbar/navbar.component");
var jumbotron_component_1 = require("./components/jumbotron/jumbotron.component");
var home_component_1 = require("./components/pages/home/home.component");
var about_component_1 = require("./components/pages/about/about.component");
var web_component_1 = require("./web.component");
var web_routes_1 = require("./web.routes");
var webmodule = (function () {
    function webmodule() {
    }
    return webmodule;
}());
webmodule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, web_routes_1.routing],
        declarations: [web_component_1.webcomponent, navbar_component_1.NavbarComponent, jumbotron_component_1.JumbotronComponent, about_component_1.AboutComponent, home_component_1.HomeComponent],
        bootstrap: [web_component_1.webcomponent]
    })
], webmodule);
exports.webmodule = webmodule;
//# sourceMappingURL=web.module.js.map