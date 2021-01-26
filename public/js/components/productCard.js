"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ProductCard(title, description, imgUrl, price) {
    if (!(this instanceof ProductCard)) {
        return this.title, this.description, this.imgUrl, this.price;
    }
    this.title = title;
    this.description = description;
    this.image_url = imgUrl;
    this.price = price;
    function addToCart(e) {
        var btn = e.target;
        console.log("🧨 cart", btn);
    }
    var productRow = document.querySelector("#productRow");
    var markup = "<div class=\"col-md-4\">\n                <div class=\"card mb-4 shadow-sm\">\n                  <img\n                    src=\"" + this.image_url + "\"\n                    class=\"bd-placeholder-img card-img-top\"\n                    width=\"100%\"\n                    height=\"auto\"\n                    role=\"img\"\n                    aria-label=\"Placeholder: Thumbnail\"\n                  >\n                  <div class=\"card-body\">\n                    <h3>" + this.title + "</h3>\n                    <p class=\"card-text\">\n                      " + this.description.slice(0, 100) + "\n                    </p>\n                    <p class=\"\">" + this.price + " Kr</p>\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div class=\"btn-group\">\n                        <button\n                          type=\"button\"\n                          data-title=\"" + this.title + "\"\n                          data-price=\"" + this.price + "\"\n                          data-photo=\"" + this.image_url + "\"\n                          class=\"addToCart btn btn-sm btn-primary\"\n                        >\n                          Add to cart\n                        </button>\n                        <button\n                          type=\"button\"\n                          class=\"addToFavorites btn btn-sm btn-outline-primary\"\n                        >\n                          Add to wishlist\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>";
    document.addEventListener("click", function (e) {
        if (e.target) {
            var button = document.querySelector(".addToCart");
            button.addEventListener("click", addToCart);
        }
    });
    return productRow.innerHTML += markup;
}
exports.default = ProductCard;
