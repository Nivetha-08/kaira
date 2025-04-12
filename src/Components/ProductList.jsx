import React from 'react';
import ProductCard from './ProductCard'; 

const ProductList = () => {
  const products = [
    { id: 1, price: '$99', imageUrl: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D' },
    { id: 2, price: '$45', imageUrl: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D' },
    { id: 3, price: '$73', imageUrl: 'https://plus.unsplash.com/premium_photo-1661597156656-75ba116e9e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3RzfGVufDB8fDB8fHww' },
  ];

  return (
    <div>
      <h1 className="p-5">Product List</h1>
      <ul className='row'> 
        {products.map(product => (
            <ProductCard
              price={product.price}
              imageUrl={product.imageUrl}
              key={product.id}
            />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
