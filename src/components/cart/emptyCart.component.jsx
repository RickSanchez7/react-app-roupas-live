import React from "react";
import { Link } from "react-router-dom";
import "./emptyCart.styles.scss";

const EmptyCart = () => {
  return (
    <section className='section-title'>
      <h2>carrinho vazio...</h2>
      <Link to='/products' className='btn'>
        ir para produtos
      </Link>
    </section>
  );
};

export default EmptyCart;
