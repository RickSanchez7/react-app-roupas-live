import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';

import logo from '../assets/diamante.svg';

import { CartContext } from '../context/cart.context';
import { SidebarContext } from '../context/sidebar.context';
import Titulo from '../assets/titulo.jpg';
import { auth } from '../firebase/firebase.utils';

import './navbar.styles.scss';

const Navbar = ({ currentUser }) => {
  const { cartItems } = useContext(CartContext);

  const { closeSidebar, toggleSidebar, state } = useContext(SidebarContext);

  const menu = state.showLinks ? 'show-links' : null;

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
              <FiMenu className='icon hamburger' onClick={toggleSidebar} />
            </li>
            <div className={`list2 ${menu}`} onClick={closeSidebar}>
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
            <li className='login' onClick={closeSidebar}>
              {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                  Log Out
                </div>
              ) : (
                <Link to='/login'>login</Link>
              )}
            </li>
            <li onClick={closeSidebar}>
              <Link to='/cart'>
                <RiShoppingBagLine className='cart' />
                <span data-testid='navbarAmount' className='amount'>
                  {cartItems}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
