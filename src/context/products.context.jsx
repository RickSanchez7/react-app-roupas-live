import React, { createContext, useState, useEffect } from "react";
import ShopData from "../pages/ShopData";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // const collection = ShopData.map(item => item.items);

  useEffect(() => {
    setLoading(true);
    setProducts(ShopData);
    setLoading(false);
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
