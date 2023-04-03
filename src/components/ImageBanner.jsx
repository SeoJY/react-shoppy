import React from 'react';

export default function ImageBanner() {
  return (
    <section className='h-96 bg-yellow-900 relative'>
      <div className='w-full h-full bg-cover bg-banner opaicity-80'></div>
      <div className='absolute w-full top-32 text-center text-white'>
        <h2 className='text-6xl mb-4 font-black text-shadow'>Shop with Us</h2>
        <p className='text-2xl'>Best Products, High Quality</p>
      </div>
    </section>
  );
}
