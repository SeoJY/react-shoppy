import React from 'react';
import ProductCard from './ui/ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <div className='inner'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
