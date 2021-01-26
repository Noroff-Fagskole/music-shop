"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var displayMessage_js_1 = tslib_1.__importDefault(require("../components/displayMessage.js"));
var footer_js_1 = tslib_1.__importDefault(require("../components/footer.js"));
var header_js_1 = tslib_1.__importDefault(require("../components/header.js"));
var user_js_1 = require("../utils/user.js");
(function () {
    header_js_1.default();
    footer_js_1.default();
    var form = document.querySelector("form");
    var username = document.querySelector("#username");
    var password = document.querySelector("#password");
    function submitForm(event) {
        event.preventDefault();
        var usernameValue = username.value.trim();
        var passwordValue = password.value.trim();
        if (usernameValue.length === 0 || passwordValue.length === 0) {
            return displayMessage_js_1.default("warning", "Invalid values", ".message-container");
        }
        user_js_1.login(usernameValue, passwordValue);
    }
    form.addEventListener("submit", submitForm);
})();
