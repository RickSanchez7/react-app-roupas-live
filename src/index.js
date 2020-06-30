import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductProvider from "./context/products.context";
import { CartProvider } from "./context/cart.context";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
