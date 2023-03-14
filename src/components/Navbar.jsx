import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';
import User from './User';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <h1>
        <Link to='/' className='flex items-center text-brand'>
          <FiShoppingBag className='text-4xl mr-1' />
          <span className='text-3xl hidden md:block'>Shoppy</span>
        </Link>
      </h1>
      <nav className='flex items-center gap-4 font-medium'>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'>Carts</Link>}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
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
    </header>
  );
}
