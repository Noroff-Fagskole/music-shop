var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export function add(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + options.token,
            },
            body: JSON.stringify(options.data),
        };
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products", fetchSettings)).json(); }));
    });
}
export function edit(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchSettings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + options.token,
            },
            body: JSON.stringify(options.data),
        };
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products/" + parseInt(options.id), fetchSettings)).json(); }));
    });
}
export function remove(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchSettings = {
            method: 'DELETE',
            Authorization: 'Bearer ' + options.token,
        };
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/products/" + parseInt(options.id), fetchSettings)).json(); }));
    });
}
function apiCallWrapper(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        return callback()
            .then((resultData) => ({ success: true, error: null, data: resultData }))
            .catch((error) => ({ success: false, error: error, data: null }));
    });
}
