import * as homeAPI from "../home.js";

(async function () {
  console.log("home.get: ", await homeAPI.get());
  console.log("home.getHeroBanner: ", await homeAPI.getHeroBanner());
})();
