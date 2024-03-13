// YourComponent.js

import React from "react";
import { connect } from "react-redux";
import { addToCart, deleteFromCart, updateQuantity } from "./ actions";
import PropTypes from "prop-types";
import cartData from "./cartData";
import "./pr9.css";

const PR9 = ({ addToCart, deleteFromCart, updateQuantity }) => {
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleDeleteFromCart = (itemId) => {
    deleteFromCart(itemId);
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartData?.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleAddToCart(item)}>Add to cart</button>
            <button onClick={() => handleDeleteFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

PR9.propTypes = {
  addToCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addToCart,
  deleteFromCart,
  updateQuantity,
};

export default connect(null, mapDispatchToProps)(PR9);
// export default connect(mapStateToProps, mapDispatchToProps)(PR9);
