import React from 'react';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;
export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className='flex flex-col inner'>
      <h2 className='text-2xl md:text-4xl text-center font-bold pb-4'>
        내 장바구니
      </h2>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-5 pb-5 md:mb-10 md:pb-10'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className='flex items-center justify-between mb-8 md:px-2 md:px-8 lg:px-16'>
            <PriceCard text='상품 총액' price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0 text-xl md:text-3xl' />
            <PriceCard text='배송액' price={SHIPPING} />
            <FaEquals className='shrink-0 text-xl md:text-3xl' />
            <PriceCard text='총 가격' price={totalPrice + SHIPPING} />
          </div>
          <Button text='주문하기' size='large' />
        </>
      )}
    </section>
  );
}
