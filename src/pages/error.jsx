import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section-title'>
      <h2>Ups...Esta página não existe...</h2>
      <Link to='/products' className='btn'>
        ir para produtos
      </Link>
    </section>
  );
};

export default Error;
