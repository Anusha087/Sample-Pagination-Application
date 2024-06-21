import React from 'react';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: { title: string; image: string; price: number }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
