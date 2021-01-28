import * as storage from "../utils/storage.js";
import { CART_KEY } from "../config/index.js";
export function ProductCard(title, description, imgUrl, price) {
    if (!(this instanceof ProductCard)) {
        return this.title, this.description, this.imgUrl, this.price;
    }
    this.title = title;
    this.description = description;
    this.image_url = imgUrl;
    this.price = price;
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
document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    document.addEventListener("click", function (e) {
        if (e.target && e.target.dataset.action === "ADD_TO_CART") {
            const product = {
                qty: 1,
                title: e.target.dataset.title,
                price: e.target.dataset.price,
                photo: e.target.dataset.photo
            };
            const inCart = cart.filter(item => item.title === product.title).length > 0;
            if (!inCart) {
                cart.filter(item => item.title === product.title);
                cart.push(product);
                storage.store(CART_KEY, cart);
            }
        }
    });
});
