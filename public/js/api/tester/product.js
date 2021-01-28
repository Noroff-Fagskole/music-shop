var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as productAPI from "../product.js";
import * as authAPI from "../auth.js";
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("getAll: ", yield productAPI.getAll());
        console.log("getAllFeatured: ", yield productAPI.getAllFeatured());
        console.log("get(id: 1): ", yield productAPI.get(1));
        console.log("get(id: 2): ", yield productAPI.get(2));
        const authResult = yield authAPI.authenticate("admin", "Pass1234");
        console.log("auth.authenticate: ", authResult);
        const token = authResult.success ? authResult.data.jwt : null;
        console.log("add(data): ", yield productAPI.add(token, {
            title: "title - API test - featured",
            description: "description - API test",
            price: 12345.12,
            featured: true,
        }));
        console.log("edit(data): ", yield productAPI.edit(token, 1, {
            title: "title - API test - EDIT not featured",
            description: "description - API test - EDITED",
            featured: false,
        }));
    });
})();
