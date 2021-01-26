import { BASE_URL } from "../config/index.js";
export default function HeroBanner(path, altText) {
    if (!(this instanceof HeroBanner))
        return new HeroBanner(path, altText);
    this.image = path;
    this.alt_text = altText;
    const jumbotron = document.querySelector("#jumbotron");
    const markup = `<div style="background: url(${BASE_URL}${path}) no-repeat center/cover;"
                      class="jumbotron text-center">
                    <div class="container">
                      <h1>${this.alt_text}</h1>
                      <p class="lead text-muted">
                        ${this.alt_text}
                      </p>
                      <p>
                        <a href="/browse.html" class="btn btn-primary my-2">START SHOPPING</a>
                        <a href="/login.html" class="btn btn-secondary my-2">LOGIN</a>
                      </p>
                    </div>
                </div>`;
    return jumbotron.innerHTML = markup;
}
