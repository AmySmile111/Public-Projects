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
var machine_service_1 = require('../machine/machine.service');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var AuthService = (function () {
    function AuthService(_MachinesService) {
        this._MachinesService = _MachinesService;
        this.isLoggedIn = false;
        this.addrouter = false;
        this.firouter = false;
        this.admin = false;
        this.updateM = false;
    }
    AuthService.prototype.checkAdmin = function (name) {
        this.admin = this._MachinesService.checkAdmin2(name);
    }; //checkAdmin
    AuthService.prototype.login = function (name, password) {
        var _this = this;
        if (this._MachinesService.checkLogin(name, password)) {
            this.Username = name;
            return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
        }
        else {
            return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.isLoggedIn = false; });
        }
    }; //Its login method simulates an API call to an external service by returning an observable that resolves successfully after a short pause.
    //we can check wheter or not login name and password are matched. using post method to connect to server
    AuthService.prototype.continue = function () {
        var _this = this;
        return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [machine_service_1.MachinesService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map