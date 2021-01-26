import { BASE_URL } from "../config/index.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import ProductCard from "../components/productCard.js";
import { getAll } from "../api/product.js";

(async function () {
  Header();
  Footer();

  const allProducts = await getAll();
  const products = allProducts.data;

  for (let i = 0; i < products.length; i++) {
    let imgUrl = "https://picsum.photos/240/220";

    if (products[i].image) {
      let path = products[i].image.formats.medium.url;
      imgUrl = `${BASE_URL}${path}`;
    }

    const renderProducts = new ProductCard(
      products[i].title,
      products[i].description,
      imgUrl,
      products[i].price
    );
    renderProducts;
  }
})(Header, Footer);
