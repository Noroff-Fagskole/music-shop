import { BASE_URL } from "../config/index.js";

export async function authenticate(usernameOrEmail, password) {
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

export async function register(username, userEmail, password) {
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

async function apiCallWrapper(callback) {
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
