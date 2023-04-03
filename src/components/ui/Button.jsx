import React from 'react';

export default function Button({ text, disabled, onClick, size }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`bg-brand px-4 text-white rounded-sm hover:brightness-10 ${
        size === 'large' ? 'py-4 text-xl' : 'py-2'
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
