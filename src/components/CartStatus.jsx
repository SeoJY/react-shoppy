import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className='relative'>
      <AiOutlineShoppingCart className='text-3xl md:text-4xl' />
      {products && (
        <span className='absolute w-5 h-5 text-center bg-brand text-white text-sm rounded-full -top-2 -right-2 leading-5'>
          {products.length}
        </span>
      )}
    </div>
  );
}
