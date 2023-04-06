import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { IoShirtSharp } from 'react-icons/io5';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';
import User from './User';
import CartStatus from './CartStatus';
import useViewTransition from '../hooks/useViewTransition';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const { viewNavigate } = useViewTransition();

  return (
    <header id='header' className='border-b border-gray-300'>
      <div className='max-w-screen-xl mx-auto flex justify-between p-2 md:px-8 md:py-4'>
        <h1 className='logo'>
          <a
            href='/'
            className='flex items-center text-brand'
            onClick={(e) => {
              e.preventDefault();
              viewNavigate('/');
            }}
          >
            <FiShoppingBag className='text-4xl mr-1' />
            <span className='text-3xl hidden md:block'>Shoppy</span>
          </a>
        </h1>
        <nav id='gnb' className='flex items-center gap-2 md:gap-4 font-medium'>
          <a
            href='/products'
            className='hover:text-brand'
            onClick={(e) => {
              e.preventDefault();
              viewNavigate('/products');
            }}
          >
            <span className='md:hidden'>
              <IoShirtSharp className='text-2xl' title='Products' />
            </span>
            <span className='hidden md:block'>Products</span>
          </a>
          {user && (
            <a
              href='/carts'
              className='hover:text-brand'
              onClick={(e) => {
                e.preventDefault();
                viewNavigate('/carts');
              }}
            >
              <CartStatus />
            </a>
          )}
          {user && user.isAdmin && (
            <a
              href='/products/new'
              className='text-2xl hover:text-brand'
              onClick={(e) => {
                e.preventDefault();
                viewNavigate('/products/new');
              }}
            >
              <BsFillPencilFill />
            </a>
          )}
          {!user && <Button onClick={login} text='Login' />}
          {user && (
            <>
              <User user={user} />
              <Button onClick={logout} text='Logout' />
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
