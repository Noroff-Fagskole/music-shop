import { BASE_URL } from "../config/index.js";
import displayMessage from "../components/displayMessage.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { login } from '../utils/user.js';

(() => {
  Header();
  Footer();

  const form = document.querySelector("form") as HTMLFormElement;
  const username = document.querySelector("#username") as HTMLInputElement;
  const password = document.querySelector("#password") as HTMLInputElement;

  function submitForm(event: Event) {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
      return displayMessage("warning", "Invalid values", ".message-container");
    }

    login(usernameValue, passwordValue);
  }

  form.addEventListener("submit", submitForm);

})();
