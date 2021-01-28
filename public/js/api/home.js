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
            .then((resultData) => ({ success: true, error: null, data: resultData }))
            .catch((error) => ({ success: false, error: error, data: null }));
    });
}
