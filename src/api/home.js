import { BASE_URL } from "../config/index.js";
import { getAllFeatured as getFeaturedProducts } from "./product.js";

export { getFeaturedProducts };

export async function get() {
  return apiCallWrapper(async () => await (await fetch(BASE_URL + "/home")).json());
}

export async function getHeroBanner() {
  return get().then(result => {
    return {
      ...result,
      data: {
        hero_banner: result.data.hero_banner,
        hero_banner_alt_text: result.data.hero_banner_alt_text,
      },
    };
  });
}

async function apiCallWrapper(callback) {
  return callback()
    .then(resultData => ({ success: true, error: null, data: resultData }))
    .catch(error => ({ success: false, error: error, data: null }));
}
