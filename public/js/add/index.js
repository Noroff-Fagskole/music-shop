"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_js_1 = require("../config/index.js");
var footer_js_1 = tslib_1.__importDefault(require("../components/footer.js"));
var header_js_1 = tslib_1.__importDefault(require("../components/header.js"));
var displayMessage_js_1 = tslib_1.__importDefault(require("../components/displayMessage.js"));
var user_js_1 = require("../lib/user.js");
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            header_js_1.default();
            footer_js_1.default();
            window.addEventListener('load', function () {
                var form = document.querySelector("form");
                var title = document.querySelector("#title");
                var price = document.querySelector("#price");
                var description = document.querySelector("#description");
                var featured = document.querySelector("#featured");
                var imageUrl = document.querySelector("#imageUrl");
                var uploadImg = document.querySelector("#uploadImg");
                function submitForm(event) {
                    event.preventDefault();
                    var titleValue = title.value.trim();
                    var priceValue = parseFloat(price.value);
                    var descriptionValue = description.value.trim();
                    var featuredValue = featured.value;
                    var imgUrlValue = imageUrl.value;
                    var imgFileValue = uploadImg.files[0];
                    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
                        return displayMessage_js_1.default("warning", "Please supply proper values", ".message-container");
                    }
                    addProduct(titleValue, priceValue, descriptionValue, featuredValue, imgUrlValue, imgFileValue);
                }
                function addProduct(title, price, description, featured, imageUrl, imgFileValue) {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var url, token, data, options, response, json, error_1;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    url = index_js_1.BASE_URL + "/products";
                                    token = user_js_1.getToken();
                                    data = JSON.stringify({
                                        title: title,
                                        price: price,
                                        description: description,
                                        featured: Boolean(featured),
                                        image_url: imageUrl,
                                        "files.image": imgFileValue
                                    });
                                    options = {
                                        method: "POST",
                                        body: data,
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: "Bearer " + token,
                                        },
                                    };
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, , 5]);
                                    return [4, fetch(url, options)];
                                case 2:
                                    response = _a.sent();
                                    return [4, response.json()];
                                case 3:
                                    json = _a.sent();
                                    if (json.created_at) {
                                        displayMessage_js_1.default("success", "Product created", ".message-container");
                                        form.reset();
                                    }
                                    if (json.error) {
                                        displayMessage_js_1.default("error", json.message, ".message-container");
                                    }
                                    return [3, 5];
                                case 4:
                                    error_1 = _a.sent();
                                    displayMessage_js_1.default("error", "An error occurred", ".message-container");
                                    return [3, 5];
                                case 5: return [2];
                            }
                        });
                    });
                }
                form.addEventListener("submit", submitForm);
            }, false);
            return [2];
        });
    });
})(header_js_1.default, footer_js_1.default);
