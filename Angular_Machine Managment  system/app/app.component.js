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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var auth_service_1 = require('./route/auth.service');
var router_2 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        //  short hands for constructor, for every constructor , it create property authService, so we can
        //use this property in template
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/welcome']);
        this.authService.addrouter = false;
        this.authService.firouter = false;
        this.authService.updateM = false;
    }; //logout
    AppComponent.prototype.addR = function () {
        this.authService.addrouter = true;
        this.authService.firouter = false;
        this.authService.updateM = false;
        if (this.authService.isLoggedIn) {
            if (this.authService.addrouter && !this.authService.admin) {
                alert("You are not administrtaor.You can not have access to add and upadate machine page");
            }
        }
    }; //addR()
    AppComponent.prototype.update = function () {
        this.authService.updateM = true;
        this.authService.addrouter = false;
        this.authService.firouter = false;
        if (this.authService.isLoggedIn) {
            if (this.authService.updateM && !this.authService.admin) {
                alert("You are not administrtaor.You can not have access to add and upadate machine page");
            }
        }
    }; //update()
    AppComponent.prototype.fiterR = function () {
        this.authService.firouter = true;
    }; //fiterR
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: "\n   <img id=\"homePicture\" src=\"app/assets/images/log.jpg\" width=\"350\" height=\"110\" style=\"margin-left:0%;font-size:30px\" >\n<p id=\"li\">Welcome to MV Lab Virtual Machine Inventory</p>\n\n<div>Welcome to MV Lab Virtual Machine Inventory</div>\n\n\n<div style=\"margin-top:-30px;\">\n        <nav class='navbar navbar-default' >\n            <div class='container-fluid'>\n                \n                <ul class='nav navbar-nav' id=\"list1\">\n                    <li *ngIf=\"!authService.isLoggedIn\" (click)=\"fiterR()\" ><a [routerLink]=\"['/login']\" id=\"link1\">LogIn</a></li>\n                    <li *ngIf=\"authService.isLoggedIn\"><a id=\"link1\" (click)=\"logout()\">LogOut</a></li>\n                      \n                    <li><a [routerLink]=\"['/filter']\" id=\"link2\" (click)=\"fiterR()\">List All Machines</a></li>\n                     <li><a [routerLink]=\"['/addUpdate']\" id=\"link2\" (click)=\"addR()\">Add Machine</a></li>\n                       <li><a [routerLink]=\"['/update']\" id=\"link2\" (click)=\"update()\">Update Machine</a></li>\n                   \n                </ul>\n            </div>\n        </nav>\n           </div>\n      \n\n        <div class='container' id=\"routerContent\">\n            <router-outlet></router-outlet>\n        </div>\n     ",
            styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                http_1.HTTP_PROVIDERS,
            ]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_2.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map