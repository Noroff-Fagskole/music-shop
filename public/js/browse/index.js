"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_js_1 = require("../config/index.js");
var footer_js_1 = tslib_1.__importDefault(require("../components/footer.js"));
var header_js_1 = tslib_1.__importDefault(require("../components/header.js"));
var productCard_js_1 = tslib_1.__importDefault(require("../components/productCard.js"));
var product_js_1 = require("../api/product.js");
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var allProducts, products, i, imgUrl, path, renderProducts;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    header_js_1.default();
                    footer_js_1.default();
                    return [4, product_js_1.getAll()];
                case 1:
                    allProducts = _a.sent();
                    products = allProducts.data;
                    for (i = 0; i < products.length; i++) {
                        imgUrl = "https://picsum.photos/240/220";
                        if (products[i].image) {
                            path = products[i].image.formats.medium.url;
                            imgUrl = "" + index_js_1.BASE_URL + path;
                        }
                        renderProducts = new productCard_js_1.default(products[i].title, products[i].description, imgUrl, products[i].price);
                        renderProducts;
                    }
                    return [2];
            }
        });
    });
})(header_js_1.default, footer_js_1.default);
