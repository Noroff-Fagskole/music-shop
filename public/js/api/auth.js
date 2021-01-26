"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.authenticate = void 0;
var tslib_1 = require("tslib");
var index_js_1 = require("../config/index.js");
function authenticate(usernameOrEmail, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fetchSettings;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            fetchSettings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: usernameOrEmail,
                    password: password
                }),
            };
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/auth/local", fetchSettings)];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.authenticate = authenticate;
function register(username, userEmail, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fetchSettings;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            fetchSettings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: userEmail,
                    password: password
                }),
            };
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/auth/local/register", fetchSettings)];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.register = register;
function apiCallWrapper(callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var result, _a, err_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    result = { success: false, error: null, data: null };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = result;
                    return [4, callback()];
                case 2:
                    _a.data = _b.sent();
                    result.success = true;
                    return [3, 4];
                case 3:
                    err_1 = _b.sent();
                    result.error = err_1;
                    return [3, 4];
                case 4: return [2, result];
            }
        });
    });
}
