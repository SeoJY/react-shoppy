import React from 'react';

export default function Button({ text, disabled, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='bg-brand py-2 px-4 text-white rounded-sm hover:brightness-10'
      disabled={disabled}
    >
      {text}
    </button>
  );
}
