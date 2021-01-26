import { BASE_URL } from "../config/index.js";

export async function getAll() {
  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products")).json());
}

export async function getAllFeatured() {
  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products?featured=true")).json());
}

export async function get(id) {
  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products/" + parseInt(id))).json());
}
export async function add(token, data) {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  };

  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products", fetchSettings)).json());
}

export async function edit(token, id, data) {
  const fetchSettings = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  };

  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products/" + parseInt(id), fetchSettings)).json());
}

export async function remove(token, id) {
  const fetchSettings = {
    method: 'DELETE',
    Authorization: 'Bearer ' + token,
  };

  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products/" + parseInt(id), fetchSettings)).json());
}

async function apiCallWrapper(callback) {
  return callback()
    .then(resultData => ({ success: true, error: null, data: resultData }))
    .catch(error => ({ success: false, error: error, data: null }));
}
