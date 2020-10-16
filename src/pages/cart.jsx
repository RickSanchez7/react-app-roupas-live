import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/cart.context";
import EmptyCart from "../components/cart/emptyCart.component";
import CartItem from "../components/cart/cartItem.component";
import StripeButton from "../components/stripe-button.component";

import "./cart.styles.scss";

const Cart = ({ currentUser }) => {
  const { total, cart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className='section-title'>
      <h2 className='cart-title'>carrinho</h2>
            <button
          type='button'
          className='clear-cart'
          onClick={() => {
            clearCart();
          }}
        >
          Apagar Carrinho
        </button>
      {cart.map(item => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>total : € {total}</h2>
      {currentUser ? null : (
        <Link to='/login' className='btn'>
          login
        </Link>
      )}
      {currentUser ? (
        <>
          <div className='test-warning'>
            Usar os seguintes dados para testar pagamento
            <br />
            4242 4242 4242 4242 - Exp: 07/22 - CVV: 123
          </div>
          <StripeButton className='btn-stripe' price={total} />
        </>
      ) : null}
    </section>
  );
};

export default Cart;
