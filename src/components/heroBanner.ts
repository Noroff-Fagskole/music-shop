import { BASE_URL, SITE_URL } from "../config/index.js";

export class HeroBanner {
  path: string;
  alt_text: string;

  constructor(path: string, altText: string) {
    this.path = path;
    this.alt_text = altText;
  }

  renderMarkup() {
    const jumbotron = document.querySelector("#jumbotron") as HTMLDivElement;
    const markup = `<div style="background: url(${BASE_URL}${this.path}) no-repeat center/cover;"
                        class="jumbotron text-center">
                      <div class="container">
                        <h1>${this.alt_text}</h1>
                        <p class="lead text-muted">
                          ${this.alt_text}
                        </p>
                        <p>
                          <a href="${SITE_URL}/browse.html" class="btn btn-primary my-2">START SHOPPING</a>
                          <a href="${SITE_URL}/login.html" class="btn btn-secondary my-2">LOGIN</a>
                        </p>
                      </div>
                  </div>`;

    return jumbotron.innerHTML = markup;
  }
}
