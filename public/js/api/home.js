import { __awaiter } from "tslib";
import { BASE_URL } from "../config/index.js";
import { getAllFeatured as getFeaturedProducts } from "./product.js";
export { getFeaturedProducts };
export function get() {
    return __awaiter(this, void 0, void 0, function* () {
        return apiCallWrapper(() => __awaiter(this, void 0, void 0, function* () { return yield (yield fetch(BASE_URL + "/home")).json(); }));
    });
}
export function getHeroBanner() {
    return __awaiter(this, void 0, void 0, function* () {
        return get().then(result => {
            return Object.assign(Object.assign({}, result), { data: {
                    hero_banner: result.data.hero_banner,
                    hero_banner_alt_text: result.data.hero_banner_alt_text,
                } });
        });
    });
}
function apiCallWrapper(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        return callback()
            .then(resultData => ({ success: true, error: null, data: resultData }))
            .catch(error => ({ success: false, error: error, data: null }));
    });
}
