import React, { createContext, useState, useEffect } from 'react';
// import ShopData from '../pages/ShopData';
import {firestore} from '../firebase/firebase.utils'

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    firestore.collection('collections').onSnapshot(snapshot => 
      setProducts(snapshot.docs.map(doc => doc.data()))
    )
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
