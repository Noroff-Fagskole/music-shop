import { BASE_URL } from "../config/index.js";
import displayMessage from "../components/displayMessage.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { register } from '../lib/user.js';

(() => {
  Header();
  Footer();

  const form = document.querySelector("form");
  const username = document.querySelector("#username");
  const userEmail = document.querySelector("#email");
  const password = document.querySelector("#password");

  function submitForm(event) {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const userEmailValue = userEmail.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
      return displayMessage("warning", "Invalid values", ".message-container");
    }

    register(usernameValue, userEmailValue, passwordValue);
  }

  form.addEventListener("submit", submitForm);
})();
