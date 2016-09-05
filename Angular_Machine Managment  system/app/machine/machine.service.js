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
var Rx_1 = require('rxjs/Rx');
var http_2 = require('@angular/http');
var mockData_1 = require('./mockData');
var router_1 = require('@angular/router');
var Url_machine = 'api/machine.json';
//const Url_machine='app/machine/machines';
var MachinesService = (function () {
    function MachinesService(_http, _data, router) {
        this._http = _http;
        this._data = _data;
        this.router = router;
        var header = new http_2.Headers();
        header.append('Content-Type', 'application/json');
    } // end constructor 
    MachinesService.prototype.getMachines = function () {
        return this._data.machines;
    };
    MachinesService.prototype.getLastMachines = function () {
        var a = (this._data.machines).length - 1;
        return this._data.machines[a];
    };
    MachinesService.prototype.deleteLast = function () {
        this._data.machines.pop();
    };
    MachinesService.prototype.getMachines1 = function () {
        //return this._http.get('http://den-vm-bwlz01:9191/u2wde/rbosvcs/MVLAB/MachineQuery')
        return this._http.get(Url_machine)
            .map(function (response) { return response.json().result_set; }) //result_set is array name
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    }; //if there is link of server, use getMachines1
    MachinesService.prototype.updateArray1 = function (machine) {
        var header = new http_2.Headers();
        header.append('Content-Type', 'application/json');
        var url = Url_machine + "/result_set/" + machine.MACHINE_NAME;
        return this._http
            .put(url, JSON.stringify(machine), { headers: header })
            .map(function (res) { return res.json(); });
    }; //if there is a link of server, use updateArray1
    MachinesService.prototype.updateArray = function (a) {
        this.get1 = this._data.machines.find(function (li) { return li.ID === a.ID; });
        this.i = this._data.machines.indexOf(this.get1);
        this._data.machines[this.i] = a;
    };
    MachinesService.prototype.updateWait = function (a) {
        this.get1 = this._data.machines.find(function (li) { return li.ID === a.ID; });
        this.i = this._data.machines.indexOf(this.get1);
        this._data.machines[this.i] = a;
    };
    MachinesService.prototype.checkLogin = function (name, password) {
        if (this._data.users.find(function (a) { return a.name == name && a.password == password; })) {
            return true;
        }
        else {
            return false;
        }
    };
    MachinesService.prototype.addRecord = function (a) {
        this._data.machines.push(a);
    };
    MachinesService.prototype.checkMachineName = function (name) {
        if (this._data.machines.find(function (a) { return a.MACHINE_NAME == name; })) {
            return true;
        }
        else {
            return false;
        }
    };
    MachinesService.prototype.findMachineName = function (name) {
        return this._data.machines.find(function (a) { return a.MACHINE_NAME == name; });
    };
    MachinesService.prototype.checkAdmin2 = function (name) {
        if (this._data.users.find(function (a) { return a.name == name && a.permission == "admin"; })) {
            return true;
        }
        else {
            return false;
        }
    };
    MachinesService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    MachinesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, mockData_1.datas, router_1.Router])
    ], MachinesService);
    return MachinesService;
}());
exports.MachinesService = MachinesService;
//# sourceMappingURL=machine.service.js.map