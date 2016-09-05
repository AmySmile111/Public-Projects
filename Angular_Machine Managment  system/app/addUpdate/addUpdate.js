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
var auth_service_1 = require('../route/auth.service');
var router_2 = require('@angular/router');
var machine_service_1 = require('../machine/machine.service');
var addUpdateComponent = (function () {
    function addUpdateComponent(_MachinesService, authService, router) {
        this._MachinesService = _MachinesService;
        this.authService = authService;
        this.router = router;
        this.list = [];
        this.newArr1 = [];
        this.newArr2 = [];
        this.newArr3 = [];
        this.newArr4 = [];
        this.newArr5 = [];
        this.newArr6 = [];
        this.listAll = [];
    }
    addUpdateComponent.prototype.ngOnInit = function () {
        this.getArray();
    };
    addUpdateComponent.prototype.getArray = function () {
        this.listAll = this._MachinesService.getMachines();
        this.getMachines2(this.listAll);
    };
    addUpdateComponent.prototype.getMachines2 = function (machines) {
        this.list = machines;
        if (this.list[0] != null) {
            this.removeOS();
            this.removePlatform();
            this.removeType();
            this.removeProject();
            this.removeTeam();
            this.removeRestrict();
        }
    };
    addUpdateComponent.prototype.removeOS = function () {
        var found;
        var x;
        var y;
        this.newArr1[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr1.length; y++) {
                if (this.list[x].DOMAIN === this.newArr1[y].DOMAIN) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr1.push(this.list[x]);
            }
        }
    };
    addUpdateComponent.prototype.removePlatform = function () {
        var found;
        var x;
        var y;
        this.newArr2[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr2.length; y++) {
                if (this.list[x].OS_MAIN === this.newArr2[y].OS_MAIN) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr2.push(this.list[x]);
            }
        }
    };
    addUpdateComponent.prototype.removeType = function () {
        var found;
        var x;
        var y;
        this.newArr3[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr3.length; y++) {
                if (this.list[x].MACHINE_TYPE === this.newArr3[y].MACHINE_TYPE) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr3.push(this.list[x]);
            }
        }
    };
    addUpdateComponent.prototype.removeProject = function () {
        var found;
        var x;
        var y;
        this.newArr4[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr4.length; y++) {
                if (this.list[x].CURRENT_PROJECT === this.newArr4[y].CURRENT_PROJECT) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr4.push(this.list[x]);
            }
        }
    };
    addUpdateComponent.prototype.removeTeam = function () {
        var found;
        var x;
        var y;
        this.newArr5[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr5.length; y++) {
                if (this.list[x].TEAM === this.newArr5[y].TEAM) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr5.push(this.list[x]);
            }
        }
    };
    addUpdateComponent.prototype.removeRestrict = function () {
        var found;
        var x;
        var y;
        this.newArr6[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr6.length; y++) {
                if (this.list[x].RESERVED_TO === this.newArr6[y].RESERVED_TO) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr6.push(this.list[x]);
            }
        }
    };
    addUpdateComponent.prototype.onSubmit = function (name, ip, Version, Reserved, wait, Owner, Date, domain, platform, type, project, team, restricted, load, Note) {
        //check name    
        if (this._MachinesService.checkMachineName(name) == false) {
            var date1 = Date.toString().substring(5, 7) + "/" + Date.toString().substring(8) + "/" + Date.toString().substring(0, 4);
            //var date:string=Date.getMonth().toString()+"/"+Date.getDate().toString()+"/"+Date.getFullYear().toString();
            this.record = ({ "DATE_RESERVED": date1, "SOFTWARE_LOADED": load, "OWNER": Owner, "SOFTWARE_VERSION": wait,
                "ID": name, "OS_MAIN": platform, "OS_VERSION": Version, "MACHINE_NAME": name, "MACHINE_TYPE": type, "DOMAIN": domain,
                "CURRENT_PROJECT": project, "TEAM": team, "NOTES": Note, "RESERVED_TO": Reserved, "RESTRICTION": restricted, "IP_ADDRESS": ip });
            this._MachinesService.addRecord(this.record);
            this.router.navigate(['/confirm']);
        }
        else {
            alert("The maichine name is aleady existed, please input a new one");
            document.getElementById("Mname").focus();
        }
    };
    addUpdateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/addUpdate/addUpdate.html',
            styleUrls: ['app/addUpdate/addUpdate.css'],
            directives: [router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [machine_service_1.MachinesService, auth_service_1.AuthService, router_1.Router])
    ], addUpdateComponent);
    return addUpdateComponent;
}());
exports.addUpdateComponent = addUpdateComponent; //end class
//# sourceMappingURL=addUpdate.js.map