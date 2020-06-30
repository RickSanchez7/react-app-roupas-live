import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/diamante.svg";

import { CartContext } from "../context/cart.context";
import Titulo from "../assets/titulo.jpg";
import { auth } from "../firebase/firebase.utils";

import "./navbar.styles.scss";

const Navbar = ({ currentUser }) => {
  const { cartItems } = useContext(CartContext);

  const [showLinks, setShowlinks] = useState(false);

  const menu = showLinks ? null : "show-links";

  const handleClick = () => {
    setShowlinks(!showLinks);
  };

  return (
    <header>
      <div className='header-container'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        <img src={Titulo} alt='titulo' className='title' />
      </div>
      <nav>
        <div className='nav-container'>
          <ul>
            <li>
              <FiMenu className='icon hamburger' onClick={handleClick} />
            </li>
            <li className={`list1 ${menu}`}>
              <Link to='/products'>produtos</Link>
            </li>
            <li className={`list1 ${menu}`}>
              <Link to='/services'>serviços</Link>
            </li>
            <li className={`list1 ${menu}`}>
              <Link to='/about'>sobre</Link>
            </li>
            <li className='login'>
              {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                  Log Out
                </div>
              ) : (
                <Link to='/login'>login</Link>
              )}
            </li>
            <li>
              <Link to='/cart'>
                <FaShoppingCart className='cart' />
                <span className='amount'>{cartItems}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
