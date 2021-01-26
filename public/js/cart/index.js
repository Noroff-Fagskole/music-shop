import { __awaiter } from "tslib";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { items } from "./getCartItems.js";
(() => __awaiter(void 0, void 0, void 0, function* () {
    Header();
    Footer();
    const cartItems = yield items;
    const productContainer = document.querySelector("#productRow");
    if (cartItems.length === 0) {
        productContainer.innerHTML = "No items in cart yet";
    }
    cartItems.forEach((cartItem) => {
        let markup = `<div class="product">
                <img src="">
                <h2>${cartItem.title}</h2>
                <div>${cartItem.price} kr</div>
              </div>`;
        productContainer.innerHTML += markup;
    });
}))(Header, Footer);
