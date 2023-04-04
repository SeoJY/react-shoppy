import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { IoShirtSharp } from 'react-icons/io5';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';
import User from './User';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header id='header' className='border-b border-gray-300'>
      <div className='max-w-screen-xl mx-auto flex justify-between p-2 md:px-8 md:py-4'>
        <h1 className='logo'>
          <Link to='/' className='flex items-center text-brand'>
            <FiShoppingBag className='text-4xl mr-1' />
            <span className='text-3xl hidden md:block'>Shoppy</span>
          </Link>
        </h1>
        <nav id='gnb' className='flex items-center gap-2 md:gap-4 font-medium'>
          <Link to='/products' className='hover:text-brand'>
            <span className='md:hidden'>
              <IoShirtSharp className='text-2xl' title='Products' />
            </span>
            <span className='hidden md:block'>Products</span>
          </Link>
          {user && (
            <Link to='/carts' className='hover:text-brand'>
              <CartStatus />
            </Link>
          )}
          {user && user.isAdmin && (
            <Link to='/products/new' className='text-2xl hover:text-brand'>
              <BsFillPencilFill />
            </Link>
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
