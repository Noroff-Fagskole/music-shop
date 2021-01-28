import * as storage from "../utils/storage.js";
import { CART_KEY } from "../config/index.js";
export default function addToCart() {
    console.log("adding to cart");
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener("click", function (e) {
            if (!e.target) {
                return;
            }
            const button = e.target;
            if (button && button.dataset.action === "ADD_TO_CART") {
                let cart = [];
                const product = {
                    qty: 1,
                    title: button.dataset.title,
                    price: button.dataset.price,
                    photo: button.dataset.photo
                };
                const inCart = cart.filter((item) => item.title === product.title);
                if (!inCart) {
                    cart.filter((item) => item.title === product.title);
                    cart.push(product);
                    storage.store(CART_KEY, cart);
                }
            }
        });
    });
}
