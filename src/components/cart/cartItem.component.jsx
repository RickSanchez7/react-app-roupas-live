import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../context/cart.context";

import "./cartItems.styles.scss";
import { useContext } from "react";

const CartItem = ({ id, imageUrl, name, price, amount }) => {
  // cart context
  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );
  return (
    <article className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='cart-info'>
        <h4>{name}</h4>
        <h5>€{price}</h5>
        <button
          type='button'
          className='cart-btn remove-btn'
          onClick={() => {
            removeItem(id);
          }}
        >
          remover
        </button>
      </div>
      <div>
        <button
          type='button'
          className='amount-btn cart-btn'
          onClick={() => increaseAmount(id)}
        >
          <FaAngleUp />
        </button>
        <p className='item-amount cart-btn'>{amount}</p>
        <button
          type='button'
          className='amount-btn cart-btn'
          onClick={() => decreaseAmount(id, amount)}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
