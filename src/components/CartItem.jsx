import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const { addOrUpdateItem, removeItem } = useCart();

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };

  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };

  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className='flex justify-between my-2 items-center'>
      <img src={image} alt='' className='w-24 md:w-48 rounded-lg' />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <strong className='block text-xl'>{title}</strong>
          <span className='block text-gray-400'>option: {option}</span>
          <span className='block text-lg mt-4'>₩{price}</span>
        </div>
        <div className='text-3xl flex justify-between items-center'>
          <AiOutlineMinusSquare
            onClick={handleMinus}
            className={ICON_CLASS}
            title='빼기'
          />
          <span className='mx-2 text-xl'>{quantity}</span>
          <AiOutlinePlusSquare
            onClick={handlePlus}
            className={ICON_CLASS}
            title='더하기'
          />
          <RiDeleteBin5Fill
            onClick={handleDelete}
            className={ICON_CLASS}
            title='삭제'
          />
        </div>
      </div>
    </li>
  );
}
