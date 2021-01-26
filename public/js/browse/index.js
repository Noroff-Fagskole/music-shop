import { __awaiter } from "tslib";
import { BASE_URL } from "../config/index.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import ProductCard from "../components/productCard.js";
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
            renderProducts;
        }
    });
})(Header, Footer);
