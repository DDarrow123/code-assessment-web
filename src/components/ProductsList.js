import React from "react";
import PropTypes from "prop-types";

const ProductsList = ({ title, children }) => (
  <div className="wrapper">
    <h3>{null}</h3>
    <div className="wrapper__children-container">{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default ProductsList;
