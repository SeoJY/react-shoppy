import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCart } from '../api/firebase';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));

  return (
    <div className='relative'>
      <AiOutlineShoppingCart className='text-4xl' />
      {products && (
        <p className='absolute w-6 h-6 text-center bg-brand text-white font-bold text-sm rounded-full -top-2 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}