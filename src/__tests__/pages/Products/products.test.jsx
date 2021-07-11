import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  cleanup,
  fireEvent,
  getByTestId,
  render,
  screen,
} from '@testing-library/react';
import Products from '../../../pages/products';
import { ProductContext } from '../../../context/products.context';
import { CartContext } from '../../../context/cart.context';
import Navbar from '../../../components/navbar';
import { SidebarContext } from '../../../context/sidebar.context';

const products = [
  {
    id: 1,
    routeName: 'sneakers',
    title: 'Sapatilhas',
    items: [
      {
        id: 10,
        price: 220,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
      },
      {
        id: 11,
        price: 280,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
      },
      {
        id: 12,
        price: 110,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
      },
    ],
  },
];

describe('Products loading', () => {
  let testId;
  beforeEach(() => {
    const { getByTestId } = render(
      <ProductContext.Provider value={{ loading: true, products: [] }}>
        <Router>
          <Products />
        </Router>
      </ProductContext.Provider>
    );
    testId = getByTestId;
  });
  afterEach(() => cleanup());

  test('renders Loading', () => {
    expect(testId('loadingId')).toBeInTheDocument();
  });
});

describe('Products', () => {
  beforeEach(() => {
    render(
      <ProductContext.Provider value={{ loading: false, products: products }}>
        <CartContext.Provider value={{ addToCart: () => {} }}>
          <Router>
            <Products />
          </Router>
        </CartContext.Provider>
      </ProductContext.Provider>
    );
  });
  afterEach(() => {
    cleanup();
  });

  test('renders products', () => {
    const title = screen.getByText('SAPATILHAS');
    const name1 = screen.getByText('Adidas NMD');
    const name2 = screen.getByText('Adidas Yeezy');
    const name3 = screen.getByText('Black Converse');

    expect(title).toBeInTheDocument();
    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
    expect(name3).toBeInTheDocument();
  });

  test('add to cart', () => {
    const addToCart = jest.fn();
    const { debug, getByTestId, getAllByTestId } = render(
      <SidebarContext.Provider
        value={{
          closeSideBar: () => {},
          toggleSidebar: () => {},
          state: { showLinks: 'show-links' },
        }}
      >
        <CartContext.Provider value={{ addToCart, cartItems: 0 }}>
          <Router>
            <Navbar currentUser={{ id: 'bni5646', signout: () => {} }} />
          </Router>
        </CartContext.Provider>
      </SidebarContext.Provider>
    );

    expect(getByTestId('navbarAmount').innerHTML).toBe('0');

    // fireEvent.click(getAllByTestId('addToCart')[0]);
    const buttons = getAllByTestId('addToCart');

    // expect(getByTestId('navbarAmount').innerHTML).toBe('1');
    expect(buttons).toHaveLength(3);
  });
});
