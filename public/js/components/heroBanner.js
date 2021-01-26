"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../config/index.js");
function HeroBanner(path, altText) {
    if (!(this instanceof HeroBanner))
        return new HeroBanner(path, altText);
    this.image = path;
    this.alt_text = altText;
    var jumbotron = document.querySelector("#jumbotron");
    var markup = "<div style=\"background: url(" + index_js_1.BASE_URL + path + ") no-repeat center/cover;\"\n                      class=\"jumbotron text-center\">\n                    <div class=\"container\">\n                      <h1>" + this.alt_text + "</h1>\n                      <p class=\"lead text-muted\">\n                        " + this.alt_text + "\n                      </p>\n                      <p>\n                        <a href=\"/browse.html\" class=\"btn btn-primary my-2\">START SHOPPING</a>\n                        <a href=\"/login.html\" class=\"btn btn-secondary my-2\">LOGIN</a>\n                      </p>\n                    </div>\n                </div>";
    return jumbotron.innerHTML = markup;
}
exports.default = HeroBanner;
