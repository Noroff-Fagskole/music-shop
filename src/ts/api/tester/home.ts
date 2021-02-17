import * as homeAPI from "../home";

(async function () {
  console.log("home.get: ", await homeAPI.get());
  console.log("home.getHeroBanner: ", await homeAPI.getHeroBanner());
})();
