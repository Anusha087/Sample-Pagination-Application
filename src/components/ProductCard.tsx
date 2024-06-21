import React from 'react';

interface ProductCardProps {
  title: string;
  
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
     
      <p className="product-price">${price}</p>
    </div>
  );
};

export default ProductCard;
