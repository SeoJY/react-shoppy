import React from 'react';

export default function Button({ text, disabled, onClick, size, full }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`bg-brand px-4 text-white rounded-sm hover:brightness-10 ${
        size === 'large' ? 'py-5 text-xl' : 'py-2'
      } ${full ? 'w-full' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
