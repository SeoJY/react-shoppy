import React from 'react';
import { MdAdminPanelSettings } from 'react-icons/md';

export default function User({ user: { photoURL, displayName, isAdmin } }) {
  const handleImgError = (e) => {
    e.target.style.display = 'none';
  };
  return (
    <div className='relative user_info flex items-center shrink-0'>
      <span className='thumb w-10 h-10 rounded-full mr-2'>
        <img
          src={photoURL}
          alt=''
          onError={handleImgError}
          referrerPolicy='no-referrer'
        />
      </span>
      <span className='hidden md:block'>{displayName}</span>
      {isAdmin && (
        <span
          className='absolute -top-1 left-7 border bg-white border-brand rounded-full text-center text-brand'
          style={{ padding: '2px' }}
        >
          <MdAdminPanelSettings title='Admin 계정' size='15' />
        </span>
      )}
    </div>
  );
}
