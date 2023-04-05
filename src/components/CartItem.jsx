import React, { useState } from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../hooks/useCart';
import AlertPopup from './ui/AlertPopup';
import { useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const navigate = useNavigate();
  const { addOrUpdateItem, removeItem } = useCart();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const {
    productsQuery: { data: products },
  } = useProducts();

  const targetProduct = products.find((item) => item.id === id);

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };

  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };

  const handleClose = () => {
    setShowDeletePopup(false);
  };

  const handleDelete = () => {
    removeItem.mutate(product);
    handleClose();
  };

  return (
    <li className='flex justify-between my-3 items-center'>
      <a
        href={`./products/${id}`}
        className='flex flex-1 justify-between my-3 items-center'
        onClick={(e) => {
          e.preventDefault();
          console.log(targetProduct);
          navigate(`../products/${id}`, { state: { product: targetProduct } });
        }}
      >
        <img src={image} alt='' className='w-20 md:w-48 rounded-lg' />
        <div className='flex-1 ml-4'>
          <div className='basis-3/5'>
            <strong className='block text-sm md:text-xl'>{title}</strong>
            <span className='block text-sm md:text-lg text-gray-400'>
              option: {option}
            </span>
            <span className='block text-sm md:text-lg md:mt-4'>
              ₩{price.toLocaleString()}
            </span>
          </div>
        </div>
      </a>
      <div>
        <div className='text-lg md:text-3xl flex justify-between items-center'>
          <AiOutlineMinusSquare
            onClick={handleMinus}
            className={ICON_CLASS}
            title='빼기'
          />
          <span className='md:mx-2 md:text-xl -mt-1'>{quantity}</span>
          <AiOutlinePlusSquare
            onClick={handlePlus}
            className={ICON_CLASS}
            title='더하기'
          />
          <RiDeleteBin5Fill
            onClick={() => setShowDeletePopup(true)}
            className={ICON_CLASS}
            title='삭제'
          />
        </div>
      </div>

      {showDeletePopup && (
        <AlertPopup
          text='상품을 장바구니에서 제거하시겠습니까?'
          onClose={handleClose}
          button1='제거'
          button2='취소'
          btn1Function={handleDelete}
          btn2Function={handleClose}
        />
      )}
    </li>
  );
}
