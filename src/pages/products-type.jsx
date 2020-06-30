import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../context/products.context";
import Loading from "../components/loading.component";
import ProductList from "../components/productList.component";

const ProductsType = () => {
  const { titleId } = useParams();
  const { products } = useContext(ProductContext);

  if (products.length === 0) {
    return <Loading />;
  } else
    return products
      .filter(items => items.routeName === titleId)
      .map(({ id, ...items }) => <ProductList key={id} {...items} />);
};

export default ProductsType;
