"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var homeAPI = tslib_1.__importStar(require("../home.js"));
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _b = (_a = console).log;
                    _c = ["home.get: "];
                    return [4, homeAPI.get()];
                case 1:
                    _b.apply(_a, _c.concat([_g.sent()]));
                    _e = (_d = console).log;
                    _f = ["home.getHeroBanner: "];
                    return [4, homeAPI.getHeroBanner()];
                case 2:
                    _e.apply(_d, _f.concat([_g.sent()]));
                    return [2];
            }
        });
    });
})();
