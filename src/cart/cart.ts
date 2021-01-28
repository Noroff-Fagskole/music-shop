import * as storage from "../utils/storage.js";
import { CART_KEY } from "../config/index.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";

(() => {
  Header();
  Footer();

  interface CartItem {
    photo: string;
    title: string;
    price: number;
    qty: number;
  }

  const cartItems = storage.retrieve(CART_KEY);
  const productContainer = document.querySelector("#productRow") as HTMLDivElement;
  const cartTotal = document.querySelector("#cartTotal") as HTMLDivElement;

  if (cartItems.length === 0) {
    productContainer.innerHTML = "No items in cart yet";
  }

  cartItems.forEach((cartItem: CartItem): void => {
    console.log(cartItem.title, cartItem.photo, cartItem.price, cartItem.qty);
    const markup = `<div class="cart">
                  <div class="row">
                    <div class="col-sm-4">
                      <img src="${cartItem.photo}" class="img-fluid">
                    </div>
                    <div class="col-sm-8">
                      <h2>${cartItem.title}</h2>
                      <h3>${cartItem.price} kr</h3>
                      <button data-action="DECREASE" class="btn btn-small btn-secondary">-</button>
                      <button data-action="INCREASE" class="btn btn-small btn-success">+</button>
                      <button data-action="REMOVE" class="btn btn-small btn-danger">x</button>
                    </div>
                  </div>
                </div>`;

    productContainer.innerHTML += markup;
  });
})();
