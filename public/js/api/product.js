"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.edit = exports.add = exports.get = exports.getAllFeatured = exports.getAll = void 0;
var tslib_1 = require("tslib");
var index_js_1 = require("../config/index.js");
function getAll() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/products")];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.getAll = getAll;
function getAllFeatured() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/products?featured=true")];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.getAllFeatured = getAllFeatured;
function get(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/products/" + parseInt(id))];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.get = get;
function add(token, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fetchSettings;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            fetchSettings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,
                },
                body: JSON.stringify(data),
            };
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/products", fetchSettings)];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.add = add;
function edit(token, id, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fetchSettings;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            fetchSettings = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,
                },
                body: JSON.stringify(data),
            };
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/products/" + parseInt(id), fetchSettings)];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.edit = edit;
function remove(token, id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fetchSettings;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            fetchSettings = {
                method: 'DELETE',
                Authorization: 'Bearer ' + token,
            };
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/products/" + parseInt(id), fetchSettings)];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.remove = remove;
function apiCallWrapper(callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2, callback()
                    .then(function (resultData) { return ({ success: true, error: null, data: resultData }); })
                    .catch(function (error) { return ({ success: false, error: error, data: null }); })];
        });
    });
}
