import { BASE_URL } from "../config/index";
import Footer from "../components/footer";
import Header from "../components/header";
import displayMessage from "../components/displayMessage";
import { getToken } from "../utils/user";

(async function () {
  Header();
  Footer();

  window.addEventListener(
    "load",
    function () {
      const form = document.querySelector("form") as HTMLFormElement;
      const title = document.querySelector("#title") as HTMLInputElement;
      const price = document.querySelector("#price") as HTMLInputElement;
      const description = document.querySelector(
        "#description"
      ) as HTMLInputElement;
      const featured = document.querySelector("#featured") as HTMLInputElement;
      const imageUrl = document.querySelector("#imageUrl") as HTMLInputElement;
      const uploadImg = document.querySelector(
        "#uploadImg"
      ) as HTMLInputElement;

      function submitForm(event: Event) {
        event.preventDefault();
        const titleValue: string = title.value.trim();
        const priceValue: number = parseFloat(price.value);
        const descriptionValue: string = description.value.trim();
        const featuredValue: string = featured.value;
        const imgUrlValue: string = imageUrl.value;
        const imgFileValue: any = uploadImg.files; // TODO

        if (
          titleValue.length === 0 ||
          priceValue === 0 ||
          isNaN(priceValue) ||
          descriptionValue.length === 0
        ) {
          return displayMessage(
            "warning",
            "Please supply proper values",
            ".message-container"
          );
        }

        addProduct(
          titleValue,
          priceValue,
          descriptionValue,
          featuredValue,
          imgUrlValue,
          imgFileValue
        );
      }

      async function addProduct(
        title: string,
        price: number,
        description: string,
        featured: string,
        imageUrl: string,
        imgFileValue: string
      ) {
        const url = BASE_URL + "/products";
        const token = getToken();

        const data = JSON.stringify({
          title: title,
          price: price,
          description: description,
          featured: Boolean(featured),
          image_url: imageUrl,
          "files.image": imgFileValue,
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
    },
    false
  );
})();
