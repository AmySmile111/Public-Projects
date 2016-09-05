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
var updateComponent = (function () {
    function updateComponent(_MachinesService, router) {
        this._MachinesService = _MachinesService;
        this.router = router;
        this.listAll = [];
        this.show = false;
    }
    updateComponent.prototype.ngOnInit = function () {
        this.getArray();
    };
    updateComponent.prototype.getArray = function () {
        this.listAll = this._MachinesService.getMachines();
    };
    updateComponent.prototype.update = function (li) {
        this.machine = li;
        this.name = this.machine.MACHINE_NAME;
        this.ip = this.machine.IP_ADDRESS;
        this.main = this.machine.OS_MAIN;
        this.version = this.machine.OS_VERSION;
        this.reserve = this.machine.RESERVED_TO;
        this.date = this.machine.DATE_RESERVED;
        this.project = this.machine.CURRENT_PROJECT;
        this.type = this.machine.MACHINE_TYPE;
        this.Sversion = this.machine.SOFTWARE_VERSION;
        this.restriction = this.machine.RESTRICTION;
        this.load = this.machine.SOFTWARE_LOADED;
        this.owner = this.machine.OWNER;
        this.domain = this.machine.DOMAIN;
        this.team = this.machine.TEAM;
        this.note = this.machine.NOTES;
        this.show = true;
    };
    updateComponent.prototype.save = function () {
        this.record = ({ "DATE_RESERVED": this.date, "SOFTWARE_LOADED": this.load, "OWNER": this.owner, "SOFTWARE_VERSION": this.Sversion,
            "ID": this.name, "OS_MAIN": this.main, "OS_VERSION": this.version, "MACHINE_NAME": this.name, "MACHINE_TYPE": this.type, "DOMAIN": this.domain,
            "CURRENT_PROJECT": this.project, "TEAM": this.team, "NOTES": this.note, "RESERVED_TO": this.reserve, "RESTRICTION": this.restriction, "IP_ADDRESS": this.ip });
        this._MachinesService.updateArray(this.record);
        this.show = false;
        this.router.navigate(['/update']);
    };
    updateComponent.prototype.cancel = function () {
        this.show = false;
        this.router.navigate(['/update']);
    };
    updateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/update/update.html',
            styleUrls: ['app/update/update.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [machine_service_1.MachinesService, router_2.Router])
    ], updateComponent);
    return updateComponent;
}());
exports.updateComponent = updateComponent;
//# sourceMappingURL=update.js.map