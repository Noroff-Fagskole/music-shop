export default function ProductCard(title, description, imgUrl, price) {
    if (!(this instanceof ProductCard)) {
        return this.title, this.description, this.imgUrl, this.price;
    }
    this.title = title;
    this.description = description;
    this.image_url = imgUrl;
    this.price = price;
    function addToCart(e) {
        const btn = e.target;
        console.log("🧨 cart", btn);
    }
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
                          data-title="${this.title}"
                          data-price="${this.price}"
                          data-photo="${this.image_url}"
                          class="addToCart btn btn-sm btn-primary"
                        >
                          Add to cart
                        </button>
                        <button
                          type="button"
                          class="addToFavorites btn btn-sm btn-outline-primary"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
    document.addEventListener("click", (e) => {
        if (e.target) {
            const button = document.querySelector(".addToCart");
            button.addEventListener("click", addToCart);
        }
    });
    return productRow.innerHTML += markup;
}
