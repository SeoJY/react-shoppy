import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-101 mx-1';

export default function CartItem({
  product,
  product: { id, image, title, option, price, quantity },
  uid
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className='flex justify-between my-2 items-center'>
      <img src={image} alt='' className='w-24 md:w-48 rounded-lg' />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <strong className='block text-lg'>{title}</strong>
          <span className='block text-xl font-bold text-brand'>{option}</span>
          <span className='block'>₩{price}</span>
        </div>
        <div className='text-2xl flex justify-between items-center'>
          <AiOutlineMinusSquare onClick={handleMinus} className={ICON_CLASS} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare onClick={handlePlus} className={ICON_CLASS} />
          <RiDeleteBin5Fill onClick={handleDelete} className={ICON_CLASS} />
        </div>
      </div>
    </li>
  );
}
