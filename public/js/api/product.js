import { __awaiter } from "tslib";
import { BASE_URL } from "../config/index.js";
export function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products")).json(); }));
    });
}
export function getAllFeatured() {
    return __awaiter(this, void 0, void 0, function* () {
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products?featured=true")).json(); }));
    });
}
export function get(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products/" + parseInt(id))).json(); }));
    });
}
export function add(token, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(data),
        };
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products", fetchSettings)).json(); }));
    });
}
export function edit(token, id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchSettings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(data),
        };
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products/" + parseInt(id), fetchSettings)).json(); }));
    });
}
export function remove(token, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchSettings = {
            method: 'DELETE',
            Authorization: 'Bearer ' + token,
        };
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products/" + parseInt(id), fetchSettings)).json(); }));
    });
}
function apiCallWrapper(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        return callback()
            .then(resultData => ({ success: true, error: null, data: resultData }))
            .catch(error => ({ success: false, error: error, data: null }));
    });
}
