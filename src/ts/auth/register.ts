import { BASE_URL } from "../config/index";
import displayMessage from "../components/displayMessage";
import Footer from "../components/footer";
import Header from "../components/header";
import { register } from "../utils/user";

(() => {
  Header();
  Footer();

  const form = document.querySelector("form") as HTMLFormElement;
  const username = document.querySelector("#username") as HTMLInputElement;
  const userEmail = document.querySelector("#email") as HTMLInputElement;
  const password = document.querySelector("#password") as HTMLInputElement;

  function submitForm(event: Event) {
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
