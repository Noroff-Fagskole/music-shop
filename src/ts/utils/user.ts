import * as authAPI from "../api/auth";
import displayMessage from "../components/displayMessage";
import { AUTH_TOKEN_KEY, USER_KEY } from "../config/index";
import * as storage from "./storage";

export async function login(usernameOrEmail: string, password: string) {
  const loginResponse: any = await authAPI.authenticate(
    usernameOrEmail,
    password
  );

  if (loginResponse.data.statusCode === 400) {
    displayMessage(
      "danger",
      `${loginResponse.data.data[0].messages[0].message}`,
      ".message-container"
    );
    return false;
  }

  if (loginResponse.data.statusCode === 200) {
    storage.store(AUTH_TOKEN_KEY, loginResponse.data.jwt);
    storage.store(USER_KEY, loginResponse.data.user);
    displayMessage(
      "success",
      "Success you are now logged in.",
      ".message-container"
    );
    return loginResponse;
  }
}

export async function register(
  username: string,
  userEmail: string,
  password: string
) {
  const registerResponse = await authAPI.register(
    username,
    userEmail,
    password
  );

  if (registerResponse) {
    console.log("registered", registerResponse);

    displayMessage(
      "success",
      "Success you are now logged in.",
      ".message-container"
    );
  }

  return registerResponse;
}

export function logout() {
  storage.remove(AUTH_TOKEN_KEY);
}

export function isLoggedIn() {
  return Boolean(getToken());
}

export function getDetails() {
  return storage.retrieve(USER_KEY);
}

export function getToken() {
  return storage.retrieve(AUTH_TOKEN_KEY);
}
