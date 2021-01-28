import { BASE_URL } from "../config/index.js";

interface PostOptions {
  id: string;
  token: string;
  data: Array<object>;
}

export async function getAll() {
  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products")).json());
}

export async function getAllFeatured() {
  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products?featured=true")).json());
}

export async function get(id: string) {
  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products/" + parseInt(id))).json());
}

export async function add(options: PostOptions) {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + options.token,
    },
    body: JSON.stringify(options.data),
  };

  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products", fetchSettings)).json());
}

export async function edit(options: PostOptions) {
  const fetchSettings = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + options.token,
    },
    body: JSON.stringify(options.data),
  };

  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products/" + parseInt(options.id), fetchSettings)).json());
}

export async function remove(options: PostOptions) {
  const fetchSettings = {
    method: 'DELETE',
    Authorization: 'Bearer ' + options.token,
  };

  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/products/" + parseInt(options.id), fetchSettings)).json());
}

async function apiCallWrapper(callback: Function) {
  return callback()
    .then((resultData: object) => ({ success: true, error: null, data: resultData }))
    .catch((error: object) => ({ success: false, error: error, data: null }));
}
