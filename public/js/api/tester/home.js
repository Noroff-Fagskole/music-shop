import { __awaiter } from "tslib";
import * as homeAPI from "../home.js";
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("home.get: ", yield homeAPI.get());
        console.log("home.getHeroBanner: ", yield homeAPI.getHeroBanner());
    });
})();
