import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const [success, setSuccess] = useState();
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    // 카트 안에 추가
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };
  return (
    <>
      <p className='mx-8 mt-8 text-gray-400'>Category : {category}</p>
      <section className='flex flex-col md:flex-row p-4'>
        <img src={image} alt='' className='w-full px-4' />
        <div className='w-full flex flex-col p-4'>
          <h2 className='text-4xl font-bold py-2'>{title}</h2>
          <dl>
            <dt className='blind'>가격</dt>
            <dd className='text-2xl font-bold py-2'>₩{price}</dd>
            <dt className='blind'>설명</dt>
            <dd className='text-md'>{description}</dd>
          </dl>
          <div className='flex items-center my-10'>
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
          {success && <p className='my-2'>{success}</p>}
          <Button text='장바구니에 추가' onClick={handleClick} size='large' />
        </div>
      </section>
    </>
  );
}
