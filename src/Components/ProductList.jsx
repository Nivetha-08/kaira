import React from 'react';
import ProductCard from './ProductCard'; 

const ProductList = () => {
  const products = [
    { id: 1, price: '$99', imageUrl: 'https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, price: '$45', imageUrl: 'https://plus.unsplash.com/premium_photo-1661751776826-0ac0ed5b8424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, price: '$73', imageUrl: 'https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul className='row'>  {/* className='row' */}
        {products.map(product => (
            <ProductCard
              price={product.price}
              imageUrl={product.imageUrl}
            />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
