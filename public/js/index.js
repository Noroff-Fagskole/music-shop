"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_js_1 = require("./config/index.js");
var home_js_1 = require("./api/home.js");
var footer_js_1 = tslib_1.__importDefault(require("./components/footer.js"));
var header_js_1 = tslib_1.__importDefault(require("./components/header.js"));
var heroBanner_js_1 = tslib_1.__importDefault(require("./components/heroBanner.js"));
var productCard_js_1 = tslib_1.__importDefault(require("./components/productCard.js"));
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var heroBanner, renderHeroBanner, featuredProducts, products, i, renderProducts;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    header_js_1.default();
                    footer_js_1.default();
                    return [4, home_js_1.getHeroBanner()];
                case 1:
                    heroBanner = _a.sent();
                    renderHeroBanner = new heroBanner_js_1.default(heroBanner.data.hero_banner.formats.large.url, heroBanner.data.hero_banner_alt_text);
                    renderHeroBanner;
                    return [4, home_js_1.getFeaturedProducts()];
                case 2:
                    featuredProducts = _a.sent();
                    products = featuredProducts.data;
                    for (i = 0; i < products.length; i++) {
                        renderProducts = new productCard_js_1.default(products[i].title, products[i].description, products[i].image ?
                            "" + index_js_1.BASE_URL + products[i].image.formats.large.url : "" + index_js_1.FALLBACK_IMAGE, products[i].price);
                        renderProducts;
                    }
                    return [2];
            }
        });
    });
})(home_js_1.getHeroBanner, header_js_1.default, footer_js_1.default);
