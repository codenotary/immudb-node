"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.Permission = exports.Action = void 0;
var Action;
(function (Action) {
    Action[Action["Grant"] = 0] = "Grant";
    Action[Action["Revoke"] = 1] = "Revoke";
})(Action = exports.Action || (exports.Action = {}));
var Permission;
(function (Permission) {
    Permission[Permission["NONE"] = 0] = "NONE";
    Permission[Permission["READ_ONLY"] = 1] = "READ_ONLY";
    Permission[Permission["READ_WRITE"] = 2] = "READ_WRITE";
})(Permission = exports.Permission || (exports.Permission = {}));
var Auth;
(function (Auth) {
    Auth[Auth["DISABLED"] = 0] = "DISABLED";
    Auth[Auth["ENABLED"] = 1] = "ENABLED";
})(Auth = exports.Auth || (exports.Auth = {}));
