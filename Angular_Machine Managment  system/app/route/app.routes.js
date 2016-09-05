"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('../home/welcome.component');
var filter_1 = require('../filter/filter');
var login_1 = require('../login/login');
var auth_service_1 = require('./auth.service');
var auth_guard_1 = require('./auth.guard');
var addUpdate_1 = require('../addUpdate/addUpdate');
var confirm_1 = require('../addUpdate/confirm');
var update_1 = require('../update/update');
exports.routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'confirm', component: confirm_1.ConfirmComponent },
    { path: 'update', component: update_1.updateComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'filter', component: filter_1.FilterComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'addUpdate', component: addUpdate_1.addUpdateComponent, canActivate: [auth_guard_1.AuthGuard] }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    auth_service_1.AuthService,
    auth_guard_1.AuthGuard
];
//# sourceMappingURL=app.routes.js.map