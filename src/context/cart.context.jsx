import React, { createContext, useState, useReducer } from "react";
import { useEffect } from "react";

import {cartreducer} from './useReducer/cart/cart-reducer'
import {INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_ITEM, CLEAR_CART, ADD_TO_CART} from './useReducer/cart/cart-actions'


function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartreducer,getCartFromLocalStorage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);


  useEffect(() => {
    //local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    //cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    // cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  //remove item
  const removeItem = id => {
    // setCart([...cart].filter(item => item.id !== id));
    dispatch({ type: REMOVE_ITEM, payload: id})
  };
  //increase amount
  const increaseAmount = id => {
    // const newCart = [...cart].map(item => {
    //   return item.id === id
    //     ? { ...item, amount: item.amount + 1 }
    //     : { ...item };
    // });
    // setCart(newCart);
    dispatch({type: INCREASE_AMOUNT, payload: id})
  };
  //decrease amount
  const decreaseAmount = (id, amount) => {
    // if (amount === 1) {
    //   removeItem(id);
    //   return;
    // }
    // const newCart = [...cart].map(item => {
    //   return item.id === id
    //     ? { ...item, amount: item.amount - 1 }
    //     : { ...item };
    // });
    // setCart(newCart);
      if (amount === 1) {
        dispatch({type: REMOVE_ITEM, payload: id})
      return;
    } else {
      dispatch({type: DECREASE_AMOUNT, payload: id})

    }
  };
  //add to cart
  const addToCart = product => {
    // const { id, imageUrl, name, price } = item;
    // const product = [...cart].find(item => item.id === id);
    // if (product) {
    //   increaseAmount(id);
    //   return;
    // } else {
    //   const newItem = { id, imageUrl, name, price, amount: 1 };
    //   const newCart = [...cart, newItem];
    //   setCart(newCart);
    // }
    const item = [...cart].find(item => item.id === product.id)

  if (item) {
      dispatch({type: INCREASE_AMOUNT, payload: product.id})
      return;
    } else {

    dispatch({type: ADD_TO_CART, payload: product})
    }
  };
  //clear cart
  const clearCart = () => {
    // setCart([]);
    dispatch({ type: CLEAR_CART})
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
