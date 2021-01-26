"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroBanner = exports.get = exports.getFeaturedProducts = void 0;
var tslib_1 = require("tslib");
var index_js_1 = require("../config/index.js");
var product_js_1 = require("./product.js");
Object.defineProperty(exports, "getFeaturedProducts", { enumerable: true, get: function () { return product_js_1.getAllFeatured; } });
function get() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2, apiCallWrapper(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, fetch(index_js_1.BASE_URL + "/home")];
                        case 1: return [4, (_a.sent()).json()];
                        case 2: return [2, _a.sent()];
                    }
                }); }); })];
        });
    });
}
exports.get = get;
function getHeroBanner() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2, get().then(function (result) {
                    return tslib_1.__assign(tslib_1.__assign({}, result), { data: {
                            hero_banner: result.data.hero_banner,
                            hero_banner_alt_text: result.data.hero_banner_alt_text,
                        } });
                })];
        });
    });
}
exports.getHeroBanner = getHeroBanner;
function apiCallWrapper(callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2, callback()
                    .then(function (resultData) { return ({ success: true, error: null, data: resultData }); })
                    .catch(function (error) { return ({ success: false, error: error, data: null }); })];
        });
    });
}
