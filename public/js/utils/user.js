"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = exports.getDetails = exports.isLoggedIn = exports.logout = exports.register = exports.login = void 0;
var tslib_1 = require("tslib");
var authAPI = tslib_1.__importStar(require("../api/auth.js"));
var displayMessage_js_1 = tslib_1.__importDefault(require("../components/displayMessage.js"));
var index_js_1 = require("../config/index.js");
var storage = tslib_1.__importStar(require("./storage.js"));
function login(usernameOrEmail, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var loginResponse;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, authAPI.authenticate(usernameOrEmail, password)];
                case 1:
                    loginResponse = _a.sent();
                    if (loginResponse.data.statusCode === 400) {
                        displayMessage_js_1.default("danger", "" + loginResponse.data.data[0].messages[0].message, ".message-container");
                        return [2, false];
                    }
                    if (loginResponse.data.statusCode === 200) {
                        storage.store(index_js_1.AUTH_TOKEN_KEY, loginResponse.data.jwt);
                        storage.store(index_js_1.USER_KEY, loginResponse.data.user);
                        displayMessage_js_1.default("success", "Success you are now logged in.", ".message-container");
                        return [2, loginResponse];
                    }
                    return [2];
            }
        });
    });
}
exports.login = login;
function register(username, userEmail, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var registerResponse;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, authAPI.register(username, userEmail, password)];
                case 1:
                    registerResponse = _a.sent();
                    if (registerResponse) {
                        console.log("registered", registerResponse);
                        displayMessage_js_1.default("success", "Success you are now logged in.", ".message-container");
                    }
                    return [2, registerResponse];
            }
        });
    });
}
exports.register = register;
function logout() {
    storage.remove(index_js_1.AUTH_TOKEN_KEY, loginResponse.data.jwt);
}
exports.logout = logout;
function isLoggedIn() {
    return Boolean(getToken());
}
exports.isLoggedIn = isLoggedIn;
function getDetails() {
    return storage.retrieve(index_js_1.USER_KEY);
}
exports.getDetails = getDetails;
function getToken() {
    return storage.retrieve(index_js_1.AUTH_TOKEN_KEY);
}
exports.getToken = getToken;
