"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Footer() {
    var footer = document.querySelector('#footer');
    var markup = "<div class=\"container\">\n                    <p class=\"float-right\">\n                    <a href=\"#\">Back to top</a>\n                    </p>\n                  </div>";
    return footer.innerHTML = markup;
}
exports.default = Footer;
