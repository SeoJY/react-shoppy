import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import AlertPopup from '../components/ui/AlertPopup';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const {
    cartQuery: { data: cartProducts },
  } = useCart();

  const [selected, setSelected] = useState(options && options[0]);
  const [success, setSuccess] = useState();

  const handleSelect = (e) => setSelected(e.target.value);

  const handleClick = () => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    const isExistingItem = cartProducts.find(
      (item) => item.id === product.id && item.option === product.option
    );

    if (isExistingItem) {
      const newProducts = cartProducts.map((item) => {
        if (item.id === product.id && item.option === product.option) {
          return { ...product, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      const newProduct = newProducts.find(
        (item) => item.id === product.id && item.option === product.option
      );

      addOrUpdateItem.mutate(newProduct, {
        onSuccess: () => {
          setSuccess('장바구니에 같은 상품이 추가되었습니다.');
        },
      });
    } else {
      addOrUpdateItem.mutate(product, {
        onSuccess: () => {
          setSuccess('장바구니에 추가되었습니다.');
        },
      });
    }
  };

  const handleClose = () => {
    setSuccess(null);
  };

  return (
    <section className='inner'>
      <p className='text-gray-400'>Category : {category}</p>
      <div className='flex flex-col md:flex-row mt-4'>
        <img src={image} alt='' className='w-full md:pr-8' />
        <div className='w-full flex flex-col mt-4'>
          <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
          <dl>
            <dt className='blind'>가격</dt>
            <dd className='text-xl md:text-2xl font-bold mt-3'>
              ₩{price.toLocaleString()}
            </dd>
            <dt className='blind'>설명</dt>
            <dd className='text-sm md:text-md mt-5'>{description}</dd>
          </dl>
          <div className='flex items-center my-10'>
            <label className='text-brand font-bold' htmlFor='select'>
              옵션
            </label>
            <select
              id='select'
              className='p-2 ml-8 flex-1 border-2 border-brand'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          {user && (
            <Button text='장바구니에 추가' onClick={handleClick} size='large' />
          )}
        </div>
      </div>
      {success && (
        <AlertPopup
          text={success}
          onClose={handleClose}
          button2='계속 쇼핑하기'
          button1='장바구니로 가기'
          btn2Function={handleClose}
          btn1Function={() => {
            navigate('/carts');
          }}
        />
      )}
    </section>
  );
}
