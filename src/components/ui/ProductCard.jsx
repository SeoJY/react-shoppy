import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();

  return (
    <li className='rounded-lg shadow-md overflow-hidden transition-all hover:scale-101'>
      <a
        href='#none'
        onClick={(e) => {
          e.preventDefault();
          navigate(`/products/${id}`, { state: { product } });
        }}
        className='flex flex-col h-full'
      >
        <div className='product-img'>
          <img src={image} alt='' />
        </div>
        <div className='flex flex-1 flex-col justify-between px-4 py-3'>
          <strong className='block text-sm md:text-lg'>{title}</strong>
          <div className='flex justify-between items-center mt-2 text-sm'>
            <span className='text-gray-500'>{category}</span>
            <span>₩{price.toLocaleString()}</span>
          </div>
        </div>
      </a>
    </li>
  );
}
