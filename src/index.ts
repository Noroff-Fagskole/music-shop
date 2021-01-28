import { BASE_URL, FALLBACK_IMAGE } from "./config/index.js";
import { getFeaturedProducts, getHeroBanner } from "./api/home.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import { HeroBanner } from "./components/heroBanner.js";
import { ProductCard } from "./components/productCard.js";

(async function () {
  Header();
  Footer();

  const heroBanner = await getHeroBanner();

  const renderHeroBanner = new HeroBanner(
    heroBanner.data.hero_banner.formats.large.url,
    heroBanner.data.hero_banner_alt_text
  );

  renderHeroBanner;

  const featuredProducts = await getFeaturedProducts();
  const products = featuredProducts.data;

  for (let i = 0; i < products.length; i++) {
    const renderProducts = new ProductCard(
      products[i].title,
      products[i].description,
      products[i].image ?
        `${BASE_URL}${products[i].image.formats.large.url}` : `${FALLBACK_IMAGE}`,
      products[i].price
    );
    renderProducts.renderMarkup();
  }
})();
