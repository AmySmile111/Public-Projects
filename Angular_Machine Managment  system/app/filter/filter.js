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
var auth_service_1 = require('../route/auth.service');
var FilterComponent = (function () {
    function FilterComponent(_MachinesService, authService) {
        this._MachinesService = _MachinesService;
        this.authService = authService;
        this.list = [];
        this.listAll = [];
        this.newArr1 = [];
        this.newArr2 = [];
        this.newArr3 = [];
        this.newArr4 = [];
        this.newArr5 = [];
        this.newArr6 = [];
        this.os = "aa";
        this.show = false;
        this.show1 = true;
        this.version = "aa";
        this.reservedTo = "aa";
        this.project = "aa";
        this.type = "aa";
        this.restriction = "aa";
        this.submitted1 = false;
        this.submitted2 = false;
        this.deleteSign = true;
        this.userName = this.authService.Username;
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.getArray();
        this.deleteSign = true;
    };
    FilterComponent.prototype.getArray = function () {
        this.listAll = this._MachinesService.getMachines();
        this.getMachines2(this.listAll);
    };
    FilterComponent.prototype.getArray1 = function () {
        var _this = this;
        this._MachinesService.getMachines1()
            .subscribe(function (machines) { return _this.getMachines2(machines); }, function (error) { return _this.errorMessage = error; });
    }; ////if there is link of server, use getMachines1
    FilterComponent.prototype.sendPost = function (re) {
        this._MachinesService.updateArray(re);
    };
    FilterComponent.prototype.getMachines2 = function (machines) {
        this.list = machines;
        if (this.list[0] != null) {
            this.removeOS();
            this.removeVersion();
            this.removeReserved();
            this.removeProject();
            this.removeType();
            this.removeRestriction();
        }
    };
    FilterComponent.prototype.removeOS = function () {
        var found;
        var x;
        var y;
        this.newArr1[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr1.length; y++) {
                if (this.list[x].OS_MAIN === this.newArr1[y].OS_MAIN) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr1.push(this.list[x]);
            }
        }
    };
    FilterComponent.prototype.removeVersion = function () {
        var found;
        var x;
        var y;
        this.newArr2[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr2.length; y++) {
                if (this.list[x].OS_VERSION === this.newArr2[y].OS_VERSION) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr2.push(this.list[x]);
            }
        }
    };
    FilterComponent.prototype.removeReserved = function () {
        var found;
        var x;
        var y;
        this.newArr3[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr3.length; y++) {
                if (this.list[x].RESERVED_TO === this.newArr3[y].RESERVED_TO) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr3.push(this.list[x]);
            }
        }
        for (y = 0; y < this.newArr3.length; y++) {
            if (this.newArr3[y].RESERVED_TO == "") {
                this.newArr3[y].RESERVED_TO = "Available";
            }
        }
    };
    FilterComponent.prototype.removeProject = function () {
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
    FilterComponent.prototype.removeType = function () {
        var found;
        var x;
        var y;
        this.newArr5[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr5.length; y++) {
                if (this.list[x].MACHINE_TYPE === this.newArr5[y].MACHINE_TYPE) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr5.push(this.list[x]);
            }
        }
    };
    FilterComponent.prototype.removeRestriction = function () {
        var found;
        var x;
        var y;
        this.newArr6[0] = this.list[0];
        for (x = 0; x < this.list.length; x++) {
            found = false;
            for (y = 0; y < this.newArr6.length; y++) {
                if (this.list[x].RESTRICTION === this.newArr6[y].RESTRICTION) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newArr6.push(this.list[x]);
            }
        }
    };
    FilterComponent.prototype.onSelect = function (value) {
        var _this = this;
        this.os = value;
        this.result = this.list.filter(function (li) { return li.OS_MAIN === (_this.os == "aa" ? li.OS_MAIN : _this.os) && li.OS_VERSION === (_this.version == "aa" ? li.OS_VERSION : _this.version) && li.RESERVED_TO === (_this.reservedTo == "aa" ? li.RESERVED_TO : _this.reservedTo) && li.CURRENT_PROJECT === (_this.project == "aa" ? li.CURRENT_PROJECT : _this.project) && li.MACHINE_TYPE === (_this.type == "aa" ? li.MACHINE_TYPE : _this.type) && li.RESTRICTION === (_this.restriction == "aa" ? li.RESTRICTION : _this.restriction); });
        this.show = true;
        this.show1 = false;
    };
    FilterComponent.prototype.onSelect2 = function (value) {
        var _this = this;
        this.version = value;
        this.result = this.list.filter(function (li) { return li.OS_VERSION === (_this.version == "aa" ? li.OS_VERSION : _this.version) && li.OS_MAIN === (_this.os == "aa" ? li.OS_MAIN : _this.os) && li.RESERVED_TO === (_this.reservedTo == "aa" ? li.RESERVED_TO : _this.reservedTo) && li.CURRENT_PROJECT === (_this.project == "aa" ? li.CURRENT_PROJECT : _this.project) && li.MACHINE_TYPE === (_this.type == "aa" ? li.MACHINE_TYPE : _this.type) && li.RESTRICTION === (_this.restriction == "aa" ? li.RESTRICTION : _this.restriction); });
        this.show = true;
        this.show1 = false;
    };
    FilterComponent.prototype.onSelect3 = function (value) {
        var _this = this;
        this.reservedTo = value;
        this.result = this.list.filter(function (li) { return li.RESERVED_TO === (_this.reservedTo == "aa" ? li.RESERVED_TO : _this.reservedTo) && li.OS_VERSION === (_this.version == "aa" ? li.OS_VERSION : _this.version) && li.OS_MAIN === (_this.os == "aa" ? li.OS_MAIN : _this.os) && li.CURRENT_PROJECT === (_this.project == "aa" ? li.CURRENT_PROJECT : _this.project) && li.MACHINE_TYPE === (_this.type == "aa" ? li.MACHINE_TYPE : _this.type) && li.RESTRICTION === (_this.restriction == "aa" ? li.RESTRICTION : _this.restriction); });
        this.show = true;
        this.show1 = false;
    };
    FilterComponent.prototype.onSelect4 = function (value) {
        var _this = this;
        this.project = value;
        this.result = this.list.filter(function (li) { return li.CURRENT_PROJECT === (_this.project == "aa" ? li.CURRENT_PROJECT : _this.project) && li.RESERVED_TO === (_this.reservedTo == "aa" ? li.RESERVED_TO : _this.reservedTo) && li.OS_VERSION === (_this.version == "aa" ? li.OS_VERSION : _this.version) && li.OS_MAIN === (_this.os == "aa" ? li.OS_MAIN : _this.os) && li.MACHINE_TYPE === (_this.type == "aa" ? li.MACHINE_TYPE : _this.type) && li.RESTRICTION === (_this.restriction == "aa" ? li.RESTRICTION : _this.restriction); });
        this.show = true;
        this.show1 = false;
    };
    FilterComponent.prototype.onSelect5 = function (value) {
        var _this = this;
        this.type = value;
        this.result = this.list.filter(function (li) { return li.MACHINE_TYPE === (_this.type == "aa" ? li.MACHINE_TYPE : _this.type) && li.CURRENT_PROJECT === (_this.project == "aa" ? li.CURRENT_PROJECT : _this.project) && li.RESERVED_TO === (_this.reservedTo == "aa" ? li.RESERVED_TO : _this.reservedTo) && li.OS_VERSION === (_this.version == "aa" ? li.OS_VERSION : _this.version) && li.OS_MAIN === (_this.os == "aa" ? li.OS_MAIN : _this.os) && li.RESTRICTION === (_this.restriction == "aa" ? li.RESTRICTION : _this.restriction); });
        this.show = true;
        this.show1 = false;
    };
    FilterComponent.prototype.onSelect6 = function (value) {
        var _this = this;
        this.restriction = value;
        this.result = this.list.filter(function (li) { return li.RESTRICTION === (_this.restriction == "aa" ? li.RESTRICTION : _this.restriction) && li.MACHINE_TYPE === (_this.type == "aa" ? li.MACHINE_TYPE : _this.type) && li.CURRENT_PROJECT === (_this.project == "aa" ? li.CURRENT_PROJECT : _this.project) && li.RESERVED_TO === (_this.reservedTo == "aa" ? li.RESERVED_TO : _this.reservedTo) && li.OS_VERSION === (_this.version == "aa" ? li.OS_VERSION : _this.version) && li.OS_MAIN === (_this.os == "aa" ? li.OS_MAIN : _this.os); });
        this.show = true;
        this.show1 = false;
    };
    FilterComponent.prototype.reserve = function (reserved, list) {
        if (reserved.RESERVED_TO == "Available") {
            list[list.indexOf(reserved)].RESERVED_TO = this.userName;
            list[list.indexOf(reserved)].DATE_RESERVED = +(new Date().getMonth() + 1).toString() + "/" + new Date().getDate().toString() + "/" + new Date().getFullYear().toString();
        }
        else if (reserved.RESERVED_TO != "Available" && reserved.RESERVED_TO == this.userName) {
            if (reserved.SOFTWARE_VERSION == "")
                var r = confirm("Are you sure to cancel this machine?");
            if (r == true) {
                {
                    list[list.indexOf(reserved)].RESERVED_TO = "Available";
                    list[list.indexOf(reserved)].DATE_RESERVED = "";
                }
            }
            if (r == false) { }
            else if (reserved.SOFTWARE_VERSION != "") {
                if (reserved.SOFTWARE_VERSION.search(",") == -1) {
                    var r = confirm("Are you sure to cancel this machine?");
                    if (r == true) {
                        list[list.indexOf(reserved)].RESERVED_TO = reserved.SOFTWARE_VERSION;
                        list[list.indexOf(reserved)].SOFTWARE_VERSION = "";
                        list[list.indexOf(reserved)].DATE_RESERVED = +(new Date().getMonth() + 1).toString() + "/" + new Date().getDate().toString() + "/" + new Date().getFullYear().toString();
                    }
                    if (r == false) { }
                }
                else {
                    var r = confirm("Are you sure to cancel this machine?");
                    if (r == true) {
                        var a = reserved.SOFTWARE_VERSION.search(",");
                        var b = reserved.SOFTWARE_VERSION.slice(0, a);
                        var d = reserved.SOFTWARE_VERSION.length;
                        list[list.indexOf(reserved)].SOFTWARE_VERSION = reserved.SOFTWARE_VERSION.slice(a + 1, d);
                        list[list.indexOf(reserved)].RESERVED_TO = b;
                        list[list.indexOf(reserved)].DATE_RESERVED = +(new Date().getMonth() + 1).toString() + "/" + new Date().getDate().toString() + "/" + new Date().getFullYear().toString();
                    }
                    if (r == false) { }
                }
            }
        }
        this.postReserve = list[list.indexOf(reserved)];
        this.sendPost(this.postReserve);
    };
    FilterComponent.prototype.reserve2 = function (reserved, list) {
        var start;
        var length;
        var a;
        var b;
        if (reserved.SOFTWARE_VERSION == "") {
            list[list.indexOf(reserved)].SOFTWARE_VERSION = this.userName;
            this.deleteSign = false;
        }
        else {
            if (list[list.indexOf(reserved)].SOFTWARE_VERSION.indexOf(',') == -1 && list[list.indexOf(reserved)].SOFTWARE_VERSION == this.userName) {
                var r = confirm("Are you sure to delete your name on waiting list?");
                if (r == true) {
                    list[list.indexOf(reserved)].SOFTWARE_VERSION = ""; //have only one name for herself
                    this.deleteSign = true;
                }
            }
            else if (list[list.indexOf(reserved)].SOFTWARE_VERSION.indexOf(this.userName) == -1) {
                list[list.indexOf(reserved)].SOFTWARE_VERSION += "," + this.userName;
                this.deleteSign = false;
            }
            else {
                var r = confirm("Are you sure to delete your name on waiting list?");
                if (r == true) {
                    start = list[list.indexOf(reserved)].SOFTWARE_VERSION.indexOf(this.userName);
                    length = this.userName.length;
                    if (list[list.indexOf(reserved)].SOFTWARE_VERSION[start - 1] == ",") {
                        a = list[list.indexOf(reserved)].SOFTWARE_VERSION.slice(0, start - 1) + list[list.indexOf(reserved)].SOFTWARE_VERSION.slice(start + length);
                        list[list.indexOf(reserved)].SOFTWARE_VERSION = a;
                    }
                    else {
                        a = list[list.indexOf(reserved)].SOFTWARE_VERSION.slice(start + length + 1);
                        list[list.indexOf(reserved)].SOFTWARE_VERSION = a;
                    }
                    this.deleteSign = true;
                } //if (r == true)
            }
        }
        this._MachinesService.updateWait(list[list.indexOf(reserved)]);
    };
    FilterComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/filter/filter.html',
            styleUrls: ['app/filter/filter.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [machine_service_1.MachinesService, auth_service_1.AuthService])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.js.map