import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import "../stylesheets/App.scss";
import cart_2 from "../images/cart_2.svg";

const App = () => (
  <div>
    <h2>Acme Store</h2>
    <div>
      <h5> Your cart is empty </h5>
      <img src={cart_2} />
    </div>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default App;

// <img src={mobile_cart_btn} />
