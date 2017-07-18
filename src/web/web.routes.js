"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/pages/home/home.component");
var about_component_1 = require("./components/pages/about/about.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    { path: 'About',
        component: about_component_1.AboutComponent,
    },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=web.routes.js.map