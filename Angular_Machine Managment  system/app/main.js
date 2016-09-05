"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var mockData_1 = require('./machine/mockData');
// Our main component
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
// Our main routes
var app_routes_1 = require('./route/app.routes');
var machine_service_1 = require('./machine/machine.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    mockData_1.datas,
    machine_service_1.MachinesService,
    http_1.HTTP_PROVIDERS
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map