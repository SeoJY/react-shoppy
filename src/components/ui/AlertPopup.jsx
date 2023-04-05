import React from 'react';
import { IoClose } from 'react-icons/io5';
import Button from './Button';

export default function AlertPopup({
  text,
  onClose,
  button1,
  button2,
  btn1Function,
  btn2Function,
}) {
  return (
    <div className='alert-popup fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-black bg-opacity-40 flex items-center justify-center'>
      <div className='alert-layer w-96 bg-white text-center'>
        <div className='py-8 px-10'>
          <p className='py-4 mb-4 whitespace-pre-line'>{text}</p>
          <div className='flex gap-3 items-center justify-center'>
            {button1 && <Button text={button1} onClick={btn1Function} />}
            {button2 && (
              <Button text={button2} type='gray' onClick={btn2Function} />
            )}
          </div>
        </div>
        <button
          type='button'
          className='absolute top-10 right-10'
          onClick={onClose}
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}
