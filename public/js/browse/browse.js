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
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { ProductCard } from "../components/productCard.js";
import { getAll } from "../api/product.js";
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        Header();
        Footer();
        const allProducts = yield getAll();
        const products = allProducts.data;
        for (let i = 0; i < products.length; i++) {
            let imgUrl = "https://picsum.photos/240/220";
            if (products[i].image) {
                let path = products[i].image.formats.medium.url;
                imgUrl = `${BASE_URL}${path}`;
            }
            const renderProducts = new ProductCard(products[i].title, products[i].description, imgUrl, products[i].price);
            renderProducts.renderMarkup();
        }
    });
})();
