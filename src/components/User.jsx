import React from 'react';
import { GrUserAdmin } from 'react-icons/gr';

export default function User({ user: { photoURL, displayName, isAdmin } }) {
  return (
    <div className='flex items-center shrink-0'>
      <img src={photoURL} alt='' className='w-10 h-10 rounded-full mr-2' />
      <span className='hidden md:block'>{displayName}</span>
      {isAdmin && <GrUserAdmin className='ml-2' title='Admin' />}
    </div>
  );
}
