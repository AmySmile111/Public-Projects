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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn && this.authService.firouter) {
            return true; //if it returns true, the navigation process continues
        }
        if (this.authService.isLoggedIn && !this.authService.addrouter && !this.authService.updateM && !this.authService.firouter) {
            return true; //if it returns true, the navigation process continues
        }
        if (this.authService.isLoggedIn && this.authService.admin == true) {
            return true; //if it returns true, the navigation process continues
        }
        if (this.authService.isLoggedIn && this.authService.admin == false) {
            return false; //if it returns true, the navigation process continues
        }
        this.router.navigate(['/login']);
        return false; //if it returns false, the navigation process stops and the user stays put
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//In guard, we use authService so we should do one step--register this service and then we can use it
//you should remeber to register in main.ts. 
//# sourceMappingURL=auth.guard.js.map