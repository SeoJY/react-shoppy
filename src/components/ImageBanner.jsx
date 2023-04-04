import React from 'react';

export default function ImageBanner() {
  return (
    <section className='h-96 bg-yellow-900 relative'>
      <div className='w-full h-full bg-cover bg-banner opaicity-80 brightness-90'></div>
      <div className='absolute w-full top-32 text-center text-white'>
        <h2 className='text-4xl md:text-6xl mt-4 md:mt-0 mb-4 font-black drop-shadow-md'>
          Shop with Us
        </h2>
        <p className='text-md md:text-2xl drop-shadow-md'>
          Best Products, High Quality
        </p>
      </div>
    </section>
  );
}
