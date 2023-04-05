import React from 'react';

export default function Button({ text, disabled, onClick, size, full, type }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`px-4 rounded-sm hover:brightness-10 ${
        size === 'large' ? 'py-5 text-xl' : 'py-2'
      } ${full ? 'w-full' : ''} ${
        type === 'gray' ? 'bg-gray-300 text-gray-700' : 'bg-brand text-white'
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
