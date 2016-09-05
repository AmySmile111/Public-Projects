"use strict";
var User = (function () {
    function User(name, password, permission, type, note) {
        this.name = name;
        this.password = password;
        this.permission = permission;
        this.type = type;
        this.note = note;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map