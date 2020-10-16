import React from "react";

// import Search from './search.component'
import CollectionProducts from "./collectionProducts.component";

import "./productList.styles.scss";

const ProductList = ({ title, items }) => {
  return (
    <div className='collection-list'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      {/* <Search /> */}
      <div className='list'>
        {items.map(item => (
          <CollectionProducts key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
