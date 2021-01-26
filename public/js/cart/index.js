"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var footer_js_1 = tslib_1.__importDefault(require("../components/footer.js"));
var header_js_1 = tslib_1.__importDefault(require("../components/header.js"));
var getCartItems_js_1 = require("./getCartItems.js");
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var cartItems, productContainer;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                header_js_1.default();
                footer_js_1.default();
                return [4, getCartItems_js_1.items];
            case 1:
                cartItems = _a.sent();
                productContainer = document.querySelector("#productRow");
                if (cartItems.length === 0) {
                    productContainer.innerHTML = "No items in cart yet";
                }
                cartItems.forEach(function (cartItem) {
                    var markup = "<div class=\"product\">\n                <img src=\"\">\n                <h2>" + cartItem.title + "</h2>\n                <div>" + cartItem.price + " kr</div>\n              </div>";
                    productContainer.innerHTML += markup;
                });
                return [2];
        }
    });
}); })(header_js_1.default, footer_js_1.default);
