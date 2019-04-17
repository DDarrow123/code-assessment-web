import React from "react";
import PropTypes from "prop-types";
import mobile_chronograph_img from "../images/mobile_chronograph_img.png";

const Product = ({ price, inventory, title }) => (
  <div className="product-details">
    <img
      className="product-details__product-img"
      src={mobile_chronograph_img}
      alt="watch image"
    />
    <div className="product-details__title-price-container">
      <span className="product-title">{title}</span>
      <span className="product-price">&#36;{price}</span>
    </div>
    {inventory ? (
      <div className="inventory-remaining">{inventory} REMAINING </div>
    ) : null}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
};

export default Product;
