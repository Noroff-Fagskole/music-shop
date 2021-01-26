import { __awaiter } from "tslib";
import { BASE_URL } from "../config/index.js";
export function authenticate(usernameOrEmail, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: usernameOrEmail,
                password: password
            }),
        };
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/auth/local", fetchSettings)).json(); }));
    });
}
export function register(username, userEmail, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: userEmail,
                password: password
            }),
        };
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/auth/local/register", fetchSettings)).json(); }));
    });
}
function apiCallWrapper(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = { success: false, error: null, data: null };
        try {
            result.data = yield callback();
            result.success = true;
        }
        catch (err) {
            result.error = err;
        }
        return result;
    });
}
