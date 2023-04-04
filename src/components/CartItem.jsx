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
    <li className='flex justify-between my-3 items-center'>
      <img src={image} alt='' className='w-20 md:w-48 rounded-lg' />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <strong className='block text-sm md:text-xl'>{title}</strong>
          <span className='block text-sm md:text-lg text-gray-400'>
            option: {option}
          </span>
          <span className='block text-sm md:text-lg md:mt-4'>
            ₩{price.toLocaleString()}
          </span>
        </div>
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
            onClick={handleDelete}
            className={ICON_CLASS}
            title='삭제'
          />
        </div>
      </div>
    </li>
  );
}
