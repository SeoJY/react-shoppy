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
      >
        <img src={image} alt='' className='w-full' />
        <div className='px-4 py-3'>
          <div className='text-md flex justify-between items-center'>
            <strong className='truncate'>{title}</strong>
            <span>₩{price}</span>
          </div>
          <span className='block mt-1 text-sm'>{category}</span>
        </div>
      </a>
    </li>
  );
}
