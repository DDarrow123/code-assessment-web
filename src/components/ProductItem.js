import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="item" style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
    />
    <button
      className="item__cart-btn"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? "" : "disabled"}
    >
      {product.inventory > 0 ? "ADD TO CART" : "SOLD OUT"}
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
