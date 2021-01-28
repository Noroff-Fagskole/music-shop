import { BASE_URL } from "../config/index.js";

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

async function apiCallWrapper(callback: Function) { // TODO <Promise>
  const result = { success: false, error: null, data: null };
  try {
    result.data = await callback();
    result.success = true;
  }
  catch (err) {
    result.error = err;
  }

  return result;
}
