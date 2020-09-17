import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';
import logo from '../assets/diamante.svg';

import { CartContext } from '../context/cart.context';
import Titulo from '../assets/titulo.jpg';
import { auth } from '../firebase/firebase.utils';

import './navbar.styles.scss';

const Navbar = ({ currentUser }) => {
  const { cartItems } = useContext(CartContext);

  const [showLinks, setShowlinks] = useState(false);

  const menu = showLinks ? 'show-links' : null;

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
            <div className={`list2 ${menu}`} onClick={handleClick}>
              <li className='list1'>
                <Link to='/products'>produtos</Link>
              </li>
              <li className='list1'>
                <Link to='/services'>serviços</Link>
              </li>
              <li className='list1 about'>
                <Link to='/about'>sobre</Link>
              </li>
            </div>
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
                <RiShoppingBagLine className='cart' />
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
