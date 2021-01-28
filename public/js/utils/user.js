var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as authAPI from "../api/auth.js";
import displayMessage from "../components/displayMessage.js";
import { AUTH_TOKEN_KEY, USER_KEY } from "../config/index.js";
import * as storage from "./storage.js";
export function login(usernameOrEmail, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const loginResponse = yield authAPI.authenticate(usernameOrEmail, password);
        console.log(loginResponse);
        if (loginResponse.data.statusCode === 400) {
            displayMessage("danger", `${loginResponse.data.data[0].messages[0].message}`, ".message-container");
            return false;
        }
        if (loginResponse.data.statusCode === 200) {
            storage.store(AUTH_TOKEN_KEY, loginResponse.data.jwt);
            storage.store(USER_KEY, loginResponse.data.user);
            displayMessage("success", "Success you are now logged in.", ".message-container");
            return loginResponse;
        }
    });
}
export function register(username, userEmail, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const registerResponse = yield authAPI.register(username, userEmail, password);
        if (registerResponse) {
            console.log("registered", registerResponse);
            displayMessage("success", "Success you are now logged in.", ".message-container");
        }
        return registerResponse;
    });
}
export function logout() {
    storage.remove(AUTH_TOKEN_KEY);
}
export function isLoggedIn() {
    return Boolean(getToken());
}
export function getDetails() {
    return storage.retrieve(USER_KEY);
}
export function getToken() {
    return storage.retrieve(AUTH_TOKEN_KEY);
}
