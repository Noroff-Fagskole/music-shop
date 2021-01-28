var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BASE_URL } from "../config/index.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import displayMessage from "../components/displayMessage.js";
import { getToken } from "../utils/user.js";
(function () {
    return __awaiter(this, void 0, void 0, function* () {
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
                const imgFileValue = uploadImg.files; // TODO
                if (titleValue.length === 0 || priceValue === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
                    return displayMessage("warning", "Please supply proper values", ".message-container");
                }
                addProduct(titleValue, priceValue, descriptionValue, featuredValue, imgUrlValue, imgFileValue);
            }
            function addProduct(title, price, description, featured, imageUrl, imgFileValue) {
                return __awaiter(this, void 0, void 0, function* () {
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
                        const response = yield fetch(url, options);
                        const json = yield response.json();
                        if (json.created_at) {
                            displayMessage("success", "Product created", ".message-container");
                            form.reset();
                        }
                        if (json.error) {
                            displayMessage("error", json.message, ".message-container");
                        }
                    }
                    catch (error) {
                        displayMessage("error", "An error occurred", ".message-container");
                    }
                });
            }
            form.addEventListener("submit", submitForm);
        }, false);
    });
})();
