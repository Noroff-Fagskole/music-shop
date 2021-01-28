import { BASE_URL } from "../config/index.js";
import { apiCallWrapper } from "./apiCallWrapper.js";

export async function authenticate(usernameOrEmail: string, password: string) {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: usernameOrEmail,
      password: password
    }),
  };

  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/auth/local", fetchSettings)).json());
}

export async function register(username: string, userEmail: string, password: string) {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      email: userEmail,
      password: password
    }),
  };

  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/auth/local/register", fetchSettings)).json());
}
