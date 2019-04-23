import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import "../stylesheets/App.scss";
import cart_2 from "../images/cart_2.svg";

const App = () => (
  <div>
    <div className="header-grid">
      <h2 className="header-grid__store-title">Acme Store</h2>
      <div className="header-grid__store-cart-status">
        <img src={cart_2} />
        <h5> Your cart is empty </h5>
      </div>
    </div>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default App;
