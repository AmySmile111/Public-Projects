"use strict";
var Machine = (function () {
    function Machine(DATE_RESERVED, SOFTWARE_LOADED, OWNER, SOFTWARE_VERSION, ID, OS_MAIN, OS_VERSION, MACHINE_NAME, MACHINE_TYPE, DOMAIN, CURRENT_PROJECT, TEAM, NOTES, RESERVED_TO, RESTRICTION, IP_ADDRESS) {
        this.DATE_RESERVED = DATE_RESERVED;
        this.SOFTWARE_LOADED = SOFTWARE_LOADED;
        this.OWNER = OWNER;
        this.SOFTWARE_VERSION = SOFTWARE_VERSION;
        this.ID = ID;
        this.OS_MAIN = OS_MAIN;
        this.OS_VERSION = OS_VERSION;
        this.MACHINE_NAME = MACHINE_NAME;
        this.MACHINE_TYPE = MACHINE_TYPE;
        this.DOMAIN = DOMAIN;
        this.CURRENT_PROJECT = CURRENT_PROJECT;
        this.TEAM = TEAM;
        this.NOTES = NOTES;
        this.RESERVED_TO = RESERVED_TO;
        this.RESTRICTION = RESTRICTION;
        this.IP_ADDRESS = IP_ADDRESS;
    }
    return Machine;
}());
exports.Machine = Machine;
//# sourceMappingURL=Machine.js.map