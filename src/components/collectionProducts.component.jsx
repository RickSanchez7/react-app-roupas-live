import React, { useContext } from 'react';

import CustomButton from './custom-button';
import { CartContext } from '../context/cart.context';

import './collectionProducts.styles.scss';

const CollectionProducts = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-product'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}>
        <CustomButton
          data-testid='addToCart'
          onClick={() => addToCart(item)}
          addToCartClass
        >
          Adicionar ao carrinho
        </CustomButton>
      </div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>€{price}</span>
      </div>
    </div>
  );
};

export default CollectionProducts;
