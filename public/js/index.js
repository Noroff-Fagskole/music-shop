var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BASE_URL, FALLBACK_IMAGE } from "./config/index.js";
import { getFeaturedProducts, getHeroBanner } from "./api/home.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import HeroBanner from "./components/heroBanner.js";
import { ProductCard } from "./components/productCard.js";
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        Header();
        Footer();
        const heroBanner = yield getHeroBanner();
        const renderHeroBanner = new HeroBanner(heroBanner.data.hero_banner.formats.large.url, heroBanner.data.hero_banner_alt_text);
        renderHeroBanner;
        const featuredProducts = yield getFeaturedProducts();
        const products = featuredProducts.data;
        for (let i = 0; i < products.length; i++) {
            const renderProducts = new ProductCard(products[i].title, products[i].description, products[i].image ?
                `${BASE_URL}${products[i].image.formats.large.url}` : `${FALLBACK_IMAGE}`, products[i].price);
            renderProducts;
        }
    });
})(getHeroBanner, Header, Footer);
