import * as productAPI from "../product.js";
import * as authAPI from "../auth.js";

(async function () {
  console.log("getAll: ", await productAPI.getAll());
  console.log("getAllFeatured: ", await productAPI.getAllFeatured());
  console.log("get(id: 1): ", await productAPI.get(1));
  console.log("get(id: 2): ", await productAPI.get(2));

  const authResult = await authAPI.authenticate("admin", "Pass1234");
  console.log("auth.authenticate: ", authResult);
  const token = authResult.success ? authResult.data.jwt : null;

  console.log("add(data): ", await productAPI.add(token, {
    title: "title - API test - featured",
    description: "description - API test",
    price: 12345.12,
    featured: true,
  }));

  console.log("edit(data): ", await productAPI.edit(token, 1, {
    title: "title - API test - EDIT not featured",
    description: "description - API test - EDITED",
    featured: false,
  }));
})();
