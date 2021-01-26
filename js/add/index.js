import { BASE_URL } from "../config/index.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import displayMessage from "../components/displayMessage.js";
import { getToken } from "../lib/user.js";

(async function () {
  Header();
  Footer();

  window.addEventListener('load', function () {
    const form = document.querySelector("form");
    const title = document.querySelector("#title");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const featured = document.querySelector("#featured");
    const imageUrl = document.querySelector("#imageUrl");
    const uploadImg = document.querySelector("#uploadImg");

    function submitForm(event) {
      event.preventDefault();
      const titleValue = title.value.trim();
      const priceValue = parseFloat(price.value);
      const descriptionValue = description.value.trim();
      const featuredValue = featured.value;
      const imgUrlValue = imageUrl.value;
      const imgFileValue = uploadImg.files[0];

      if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
      }

      addProduct(titleValue, priceValue, descriptionValue, featuredValue, imgUrlValue, imgFileValue);
    }

    async function addProduct(title, price, description, featured, imageUrl, imgFileValue) {
      const url = BASE_URL + "/products";
      const token = getToken();

      const data = JSON.stringify({
        title: title,
        price: price,
        description: description,
        featured: Boolean(featured),
        image_url: imageUrl,
        "files.image": imgFileValue
      });

      const options = {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
          displayMessage("success", "Product created", ".message-container");
          form.reset();
        }

        if (json.error) {
          displayMessage("error", json.message, ".message-container");
        }
      } catch (error) {
        displayMessage("error", "An error occurred", ".message-container");
      }
    }

    form.addEventListener("submit", submitForm);

  }, false);

})();
