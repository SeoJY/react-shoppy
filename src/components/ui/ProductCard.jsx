import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, category, price }
}) {
  const navigate = useNavigate();
  return (
    <li className='rounded-lg shadow-md overflow-hidden transition-all hover:scale-101'>
      <a
        href='#none'
        onClick={e => {
          e.preventDefault();
          navigate(`/products/${id}`, { state: { product } });
        }}
      >
        <img src={image} alt='' className='w-full' />
        <div className='mt-2 px-2 text-lg flex justify-between items-center'>
          <strong className='truncate'>{title}</strong>
          <span>₩{price}</span>
        </div>
        <span>{category}</span>
      </a>
    </li>
  );
}
