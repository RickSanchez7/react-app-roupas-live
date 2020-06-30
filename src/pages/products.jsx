import React, { useContext } from "react";

import { ProductContext } from "../context/products.context";
import Loading from "../components/loading.component";
import ProductList from "../components/productList.component";

const Products = () => {
  const { loading, products } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return products.map(({ id, ...items }) => (
    <ProductList classname='products' key={id} {...items} />
  ));
};

export default Products;
