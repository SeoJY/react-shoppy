import React from 'react';
import { GrUserAdmin } from 'react-icons/gr';

export default function User({ user: { photoURL, displayName, isAdmin } }) {
  const handleImgError = (e) => {
    e.target.style.display = 'none';
  };
  return (
    <div className='user_info flex items-center shrink-0'>
      <span className='thumb w-10 h-10 rounded-full mr-2'>
        <img
          src={photoURL}
          alt=''
          onError={handleImgError}
          referrerPolicy='no-referrer'
        />
      </span>
      <span className='hidden md:block'>{displayName}</span>
      {isAdmin && <GrUserAdmin className='ml-2' title='Admin 계정' />}
    </div>
  );
}
