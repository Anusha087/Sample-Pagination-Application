import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import './App.css';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const postsPerPage = 3;

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const totalPages = Math.ceil(products.length / postsPerPage);
  const currentProducts = products.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div className="App">
      <h1>My Store</h1>
      <ProductList products={currentProducts} />
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default App;
