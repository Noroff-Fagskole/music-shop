"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var productAPI = tslib_1.__importStar(require("../product.js"));
var authAPI = tslib_1.__importStar(require("../auth.js"));
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, authResult, token, _o, _p, _q, _r, _s, _t;
        return tslib_1.__generator(this, function (_u) {
            switch (_u.label) {
                case 0:
                    _b = (_a = console).log;
                    _c = ["getAll: "];
                    return [4, productAPI.getAll()];
                case 1:
                    _b.apply(_a, _c.concat([_u.sent()]));
                    _e = (_d = console).log;
                    _f = ["getAllFeatured: "];
                    return [4, productAPI.getAllFeatured()];
                case 2:
                    _e.apply(_d, _f.concat([_u.sent()]));
                    _h = (_g = console).log;
                    _j = ["get(id: 1): "];
                    return [4, productAPI.get(1)];
                case 3:
                    _h.apply(_g, _j.concat([_u.sent()]));
                    _l = (_k = console).log;
                    _m = ["get(id: 2): "];
                    return [4, productAPI.get(2)];
                case 4:
                    _l.apply(_k, _m.concat([_u.sent()]));
                    return [4, authAPI.authenticate("admin", "Pass1234")];
                case 5:
                    authResult = _u.sent();
                    console.log("auth.authenticate: ", authResult);
                    token = authResult.success ? authResult.data.jwt : null;
                    _p = (_o = console).log;
                    _q = ["add(data): "];
                    return [4, productAPI.add(token, {
                            title: "title - API test - featured",
                            description: "description - API test",
                            price: 12345.12,
                            featured: true,
                        })];
                case 6:
                    _p.apply(_o, _q.concat([_u.sent()]));
                    _s = (_r = console).log;
                    _t = ["edit(data): "];
                    return [4, productAPI.edit(token, 1, {
                            title: "title - API test - EDIT not featured",
                            description: "description - API test - EDITED",
                            featured: false,
                        })];
                case 7:
                    _s.apply(_r, _t.concat([_u.sent()]));
                    return [2];
            }
        });
    });
})();
