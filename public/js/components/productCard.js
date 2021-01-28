import * as storage from "../utils/storage.js";
import { CART_KEY } from "../config/index.js";
export class ProductCard {
    constructor(title, description, image_url, price) {
        this.title = title;
        this.description = description;
        this.image_url = image_url;
        this.price = price;
    }
    renderMarkup() {
        const productRow = document.querySelector("#productRow");
        const markup = `<div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img
                    src="${this.image_url}"
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="auto"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                  <div class="card-body">
                    <h3>${this.title}</h3>
                    <p class="card-text">
                      ${this.description.slice(0, 100)}
                    </p>
                    <p class="">${this.price} Kr</p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          data-action="ADD_TO_CART"
                          data-title="${this.title}"
                          data-price="${this.price}"
                          data-photo="${this.image_url}"
                          class="addToCartBtn btn btn-sm btn-primary"
                        >
                          Add to cart
                        </button>
                        <button
                          type="button"
                          data-action="ADD_TO_FAVORITES"
                          data-title="${this.title}"
                          data-price="${this.price}"
                          data-photo="${this.image_url}"
                          class="addToFavorites btn btn-sm btn-outline-primary"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
        return productRow.innerHTML += markup;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("click", function (e) {
        let cart = [];
        const button = e.target;
        if (button && button.dataset.action === "ADD_TO_CART") {
            const product = {
                qty: 1,
                title: button.dataset.title,
                price: button.dataset.price,
                photo: button.dataset.photo
            };
            const inCart = cart.filter((item) => item.title === product.title);
            if (!inCart) {
                cart.push(product);
                storage.store(CART_KEY, cart); // save to local storage
            }
        }
    });
});
