import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { addOrUpdateToCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, category, price, options }
    }
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = e => setSelected(e.target.value);
  const handleClick = e => {
    // 카트 안에 추가
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(uid, product);
  };
  return (
    <>
      <p className='mx-12 mt-4 text-gray-8'>{category}</p>
      <section className='flex flex-col md:flex-row p-4'>
        <img src={image} alt='' className='w-full px-4 basis-7/12' />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <strong className='text-3xl font-bold py-2'>{title}</strong>
          <dl>
            <dt>가격</dt>
            <dd className='text-2xl font-bold py-2'>₩{price}</dd>
            <dt>설명</dt>
            <dd className='text-md py-4'>{description}</dd>
          </dl>
          <div className='flex items-center'>
            <label className='text-brand font-bold' htmlFor='select'>
              옵션
            </label>
            <select
              id='select'
              className='p-2 m-4 flex-1 border-2 border-brand'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text='장바구니에 추가' onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
