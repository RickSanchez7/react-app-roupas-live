import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductProvider from './context/products.context';
import { CartProvider } from './context/cart.context';
import { SidebarProvider } from './context/sidebar.context';
import { ScrollButtonProvider } from './context/scrollButton.context';

ReactDOM.render(
  <React.StrictMode>
    <ScrollButtonProvider>
      <CartProvider>
        <ProductProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </ProductProvider>
      </CartProvider>
    </ScrollButtonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
