import { BASE_URL, FALLBACK_IMAGE } from "./config/index";
import { getFeaturedProducts, getHeroBanner } from "./api/home";
import Footer from "./components/footer";
import Header from "./components/header";
import { HeroBanner } from "./components/heroBanner";
import { ProductCard } from "./components/productCard";

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
      products[i].image
        ? `${BASE_URL}${products[i].image.formats.large.url}`
        : `${FALLBACK_IMAGE}`,
      products[i].price
    );
    renderProducts.renderMarkup();
  }
})();
