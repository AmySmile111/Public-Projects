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
var machine_service_1 = require('../machine/machine.service');
var router_2 = require('@angular/router');
var ConfirmComponent = (function () {
    function ConfirmComponent(_MachinesService, router) {
        this._MachinesService = _MachinesService;
        this.router = router;
        this.show = false;
    }
    //edit and ngmodel
    ConfirmComponent.prototype.ngOnInit = function () {
        this.li = this._MachinesService.getLastMachines();
    };
    ConfirmComponent.prototype.cancel = function () {
        this._MachinesService.deleteLast();
        this.router.navigate(['/addUpdate']);
    };
    ConfirmComponent.prototype.save = function () {
        this.router.navigate(['/addUpdate']);
    };
    ConfirmComponent.prototype.update = function () {
        this.show = true;
    };
    ConfirmComponent.prototype.save1 = function () {
        this._MachinesService.updateArray(this.li);
        this.router.navigate(['/addUpdate']);
    };
    ConfirmComponent.prototype.back = function () {
        this.show = false;
        this.router.navigate(['/confirm']);
    };
    ConfirmComponent = __decorate([
        core_1.Component({
            template: "\n  <h2>This is the machine that you just added:</h2>\n  <br>\n  <table class=\"table table-striped\" border=\"1\" style=\"width:100%;text-align:center\" [hidden]=\"show\">\n  <tr >  \n    <th style=\"width:11% ; text-align:center\">Machine Name</th>\n    <th style=\"width:11%;text-align:center\">IP</th> \n    <th style=\"width:11%;text-align:center\">OS</th> \n    <th style=\"width:11%;text-align:center\">OS Version</th>\n    <th style=\"width:11%;text-align:center\">Reserved To</th>\n    <th style=\"width:11%;text-align:center\">Reserved Date</th>\n    <th style=\"width:11%;text-align:center\">Current Project</th>\n    <th style=\"width:11%;text-align:center\">Machine Type</th> \n    <th style=\"width:11%;text-align:center\">Wait List</th>\n    <th style=\"width:15%;text-align:center\">Restriction</th>\n    <th style=\"width:15%;text-align:center\">Software Loaded</th>\n    <th style=\"width:15%;text-align:center\">Owner</th>\n    <th style=\"width:15%;text-align:center\">Domain</th>\n    <th style=\"width:15%;text-align:center\">Team</th>\n    <th style=\"width:15%;text-align:center\">Notes</th>\n \n </tr>\n\n\n\n <tr >\n    <td>{{li.MACHINE_NAME}}</td>\n    <td>{{li.IP_ADDRESS}}</td>\n    <td>{{li.OS_MAIN}}</td> \n    <td>{{li.OS_VERSION}}</td>\n    <td>{{li.RESERVED_TO}}</td>\n    <td>{{li.DATE_RESERVED}}</td>\n    <td>{{li.CURRENT_PROJECT}}</td>\n    <td>{{li.MACHINE_TYPE}}</td>\n    <td > {{li.SOFTWARE_VERSION}}</td>\n    <td>{{li.RESTRICTION}}</td>\n    <td>{{li.SOFTWARE_LOADED}}</td>\n    <td>{{li.OWNER}}</td>\n    <td>{{li.DOMAIN}}</td>\n    <td>{{li.TEAM}}</td>\n    <td>{{li.NOTES}}</td>\n  </tr>\n \n    \n\n    \n</table>\n\n\n<table class=\"table table-striped\" border=\"1\" style=\"width:100%;text-align:center\" [hidden]=\"!show\">\n  <tr>  \n    <th style=\"width:11% ; text-align:center\">Machine Name</th>\n    <th style=\"width:11%;text-align:center\">IP</th> \n    <th style=\"width:11%;text-align:center\">OS</th> \n    <th style=\"width:11%;text-align:center\">OS Version</th>\n    <th style=\"width:11%;text-align:center\">Reserved To</th>\n    <th style=\"width:11%;text-align:center\">Reserved Date</th>\n    <th style=\"width:11%;text-align:center\">Current Project</th>\n \n </tr>\n  <tr>\n    <td><input [(ngModel)]=\"li.MACHINE_NAME\"></td>\n    <td><input [(ngModel)]=\"li.IP_ADDRESS\"></td>\n    <td><input [(ngModel)]=\"li.OS_MAIN\"></td>\n    <td><input [(ngModel)]=\"li.OS_VERSION\"></td>\n    <td><input [(ngModel)]=\"li.RESERVED_TO\"></td>\n    <td><input [(ngModel)]=\"li.DATE_RESERVED\"></td>\n    <td><input [(ngModel)]=\"li.CURRENT_PROJECT\"></td>\n  </tr>\n\n <tr>  \n   <th style=\"width:11%;text-align:center\">Machine Type</th> \n   <th style=\"width:11%;text-align:center\">Wait List</th>\n   <th style=\"width:15%;text-align:center\">Restriction</th>\n   <th style=\"width:15%;text-align:center\">Software Loaded</th>\n   <th style=\"width:15%;text-align:center\">Owner</th>\n   <th style=\"width:15%;text-align:center\">Domain</th>\n   <th style=\"width:15%;text-align:center\">Team</th>\n</tr>\n\n\n<tr>\n   \n  <td><input [(ngModel)]=\"li.MACHINE_TYPE\"></td>\n  <td><input [(ngModel)]=\"li.SOFTWARE_VERSION\"></td>\n  <td><input [(ngModel)]=\"li.RESTRICTION\"></td>\n  <td><input [(ngModel)]=\"li.SOFTWARE_LOADED\"></td>\n  <td><input [(ngModel)]=\"li.OWNER\"></td>\n  <td><input [(ngModel)]=\"li.DOMAIN\"></td>\n  <td><input [(ngModel)]=\"li.TEAM\"></td>\n</tr>\n\n<tr><th style=\"width:15%;text-align:center\">Note</th></tr>\n<tr><td><input [(ngModel)]=\"li.NOTES\"></td></tr>\n\n    \n</table>\n\n\n<button (click)=\"cancel()\" id=\"cancel\" [hidden]=\"show\">Cancle</button>\n<button (click)=\"save()\" id=\"save\" [hidden]=\"show\">Confirm</button>\n<button (click)=\"update()\" id=\"up\" [hidden]=\"show\">Update</button>\n<button (click)=\"save1()\" id=\"cancel1\" [hidden]=\"!show\">save</button>\n<button (click)=\"back()\" id=\"save\" [hidden]=\"!show\">cancel</button>\n\n\n",
            styles: [" \n#cancel{\n     margin-left:30%;\n }\n\n#save{\n     margin-left:10%;\n }\n\n#up{\n     margin-left:10%;\n }\n #cancel1{\n     margin-left:40%;\n }\n\n\n  "],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [machine_service_1.MachinesService, router_2.Router])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.js.map