import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className='bg-gray-50 p-4 md:p-8 rounded-2xl text-center'>
      <strong className='block text-sm md:text-lg'>{text}</strong>
      <div className='font-bold text-brand text-md md:text-2xl'>
        ₩{price.toLocaleString()}
      </div>
    </div>
  );
}
